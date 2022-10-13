package shared

import (
	"time"
)

type ListTransformJobsRequest struct {
	CreationTimeAfter      *time.Time              `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time              `json:"CreationTimeBefore"`
	LastModifiedTimeAfter  *time.Time              `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time              `json:"LastModifiedTimeBefore"`
	MaxResults             *int64                  `json:"MaxResults"`
	NameContains           *string                 `json:"NameContains"`
	NextToken              *string                 `json:"NextToken"`
	SortBy                 *SortByEnum             `json:"SortBy"`
	SortOrder              *SortOrderEnum          `json:"SortOrder"`
	StatusEquals           *TransformJobStatusEnum `json:"StatusEquals"`
}
