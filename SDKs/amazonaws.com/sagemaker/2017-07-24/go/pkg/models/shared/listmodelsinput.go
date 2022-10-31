package shared

import (
"time")

type ListModelsInput struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *ModelSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *OrderKeyEnum `json:"SortOrder,omitempty"`
    
}

