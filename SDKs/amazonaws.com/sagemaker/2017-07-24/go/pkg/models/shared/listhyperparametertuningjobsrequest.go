package shared

import (
	"time"
)

type ListHyperParameterTuningJobsRequest struct {
	CreationTimeAfter      *time.Time                                `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time                                `json:"CreationTimeBefore"`
	LastModifiedTimeAfter  *time.Time                                `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time                                `json:"LastModifiedTimeBefore"`
	MaxResults             *int64                                    `json:"MaxResults"`
	NameContains           *string                                   `json:"NameContains"`
	NextToken              *string                                   `json:"NextToken"`
	SortBy                 *HyperParameterTuningJobSortByOptionsEnum `json:"SortBy"`
	SortOrder              *SortOrderEnum                            `json:"SortOrder"`
	StatusEquals           *HyperParameterTuningJobStatusEnum        `json:"StatusEquals"`
}
