package shared

import (
"time")

type ListLabelingJobsForWorkteamRequest struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    JobReferenceCodeContains *string `json:"JobReferenceCodeContains,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *ListLabelingJobsForWorkteamSortByOptionsEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    WorkteamArn string `json:"WorkteamArn"`
    
}

