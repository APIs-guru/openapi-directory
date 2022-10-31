package shared

import (
"time")

type ListAppImageConfigsRequest struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    ModifiedTimeAfter *time.Time `json:"ModifiedTimeAfter,omitempty"`
    ModifiedTimeBefore *time.Time `json:"ModifiedTimeBefore,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *AppImageConfigSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

