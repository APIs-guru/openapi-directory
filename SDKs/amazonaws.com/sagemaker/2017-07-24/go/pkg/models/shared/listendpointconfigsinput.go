package shared

import (
"time")

type ListEndpointConfigsInput struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *EndpointConfigSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *OrderKeyEnum `json:"SortOrder,omitempty"`
    
}

