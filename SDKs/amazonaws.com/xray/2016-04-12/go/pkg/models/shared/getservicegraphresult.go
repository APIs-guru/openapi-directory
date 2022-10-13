package shared

import (
	"time"
)

type GetServiceGraphResult struct {
	ContainsOldGroupVersions *bool      `json:"ContainsOldGroupVersions"`
	EndTime                  *time.Time `json:"EndTime"`
	NextToken                *string    `json:"NextToken"`
	Services                 []Service  `json:"Services"`
	StartTime                *time.Time `json:"StartTime"`
}
