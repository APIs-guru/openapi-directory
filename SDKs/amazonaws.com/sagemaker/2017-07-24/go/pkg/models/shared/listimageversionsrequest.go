package shared

import (
"time")

type ListImageVersionsRequest struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    ImageName string `json:"ImageName"`
    LastModifiedTimeAfter *time.Time `json:"LastModifiedTimeAfter,omitempty"`
    LastModifiedTimeBefore *time.Time `json:"LastModifiedTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *ImageVersionSortByEnum `json:"SortBy,omitempty"`
    SortOrder *ImageVersionSortOrderEnum `json:"SortOrder,omitempty"`
    
}

