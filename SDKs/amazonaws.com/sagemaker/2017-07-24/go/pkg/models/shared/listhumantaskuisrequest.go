package shared

import (
	"time"
)

type ListHumanTaskUisRequest struct {
	CreationTimeAfter  *time.Time     `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time     `json:"CreationTimeBefore"`
	MaxResults         *int64         `json:"MaxResults"`
	NextToken          *string        `json:"NextToken"`
	SortOrder          *SortOrderEnum `json:"SortOrder"`
}
