package shared

import (
	"time"
)

type ListAutoMlJobsRequest struct {
	CreationTimeAfter      *time.Time           `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time           `json:"CreationTimeBefore"`
	LastModifiedTimeAfter  *time.Time           `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time           `json:"LastModifiedTimeBefore"`
	MaxResults             *int64               `json:"MaxResults"`
	NameContains           *string              `json:"NameContains"`
	NextToken              *string              `json:"NextToken"`
	SortBy                 *AutoMlSortByEnum    `json:"SortBy"`
	SortOrder              *AutoMlSortOrderEnum `json:"SortOrder"`
	StatusEquals           *AutoMlJobStatusEnum `json:"StatusEquals"`
}
