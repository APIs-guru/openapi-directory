package shared

import (
	"time"
)

type ListLabelingJobsForWorkteamRequest struct {
	CreationTimeAfter        *time.Time                                    `json:"CreationTimeAfter"`
	CreationTimeBefore       *time.Time                                    `json:"CreationTimeBefore"`
	JobReferenceCodeContains *string                                       `json:"JobReferenceCodeContains"`
	MaxResults               *int64                                        `json:"MaxResults"`
	NextToken                *string                                       `json:"NextToken"`
	SortBy                   *ListLabelingJobsForWorkteamSortByOptionsEnum `json:"SortBy"`
	SortOrder                *SortOrderEnum                                `json:"SortOrder"`
	WorkteamArn              string                                        `json:"WorkteamArn"`
}
