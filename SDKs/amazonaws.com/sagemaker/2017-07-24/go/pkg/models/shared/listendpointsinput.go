package shared

import (
"time")

type ListEndpointsInput struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    LastModifiedTimeAfter *time.Time `json:"LastModifiedTimeAfter,omitempty"`
    LastModifiedTimeBefore *time.Time `json:"LastModifiedTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *EndpointSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *OrderKeyEnum `json:"SortOrder,omitempty"`
    StatusEquals *EndpointStatusEnum `json:"StatusEquals,omitempty"`
    
}

