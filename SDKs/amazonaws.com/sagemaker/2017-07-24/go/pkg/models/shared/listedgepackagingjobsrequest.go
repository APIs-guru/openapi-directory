package shared

import (
	"time"
)

type ListEdgePackagingJobsRequest struct {
	CreationTimeAfter      *time.Time                       `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time                       `json:"CreationTimeBefore"`
	LastModifiedTimeAfter  *time.Time                       `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time                       `json:"LastModifiedTimeBefore"`
	MaxResults             *int64                           `json:"MaxResults"`
	ModelNameContains      *string                          `json:"ModelNameContains"`
	NameContains           *string                          `json:"NameContains"`
	NextToken              *string                          `json:"NextToken"`
	SortBy                 *ListEdgePackagingJobsSortByEnum `json:"SortBy"`
	SortOrder              *SortOrderEnum                   `json:"SortOrder"`
	StatusEquals           *EdgePackagingJobStatusEnum      `json:"StatusEquals"`
}
