package shared

import (
"time")

type ListProjectsInput struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *ProjectSortByEnum `json:"SortBy,omitempty"`
    SortOrder *ProjectSortOrderEnum `json:"SortOrder,omitempty"`
    
}

