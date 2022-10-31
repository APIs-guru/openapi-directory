package shared

import (
	"time"
)

type ListHumanTaskUisRequest struct {
	CreationTimeAfter  *time.Time     `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore *time.Time     `json:"CreationTimeBefore,omitempty"`
	MaxResults         *int64         `json:"MaxResults,omitempty"`
	NextToken          *string        `json:"NextToken,omitempty"`
	SortOrder          *SortOrderEnum `json:"SortOrder,omitempty"`
}
