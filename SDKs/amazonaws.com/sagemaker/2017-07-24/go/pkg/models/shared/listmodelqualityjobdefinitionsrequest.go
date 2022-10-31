package shared

import (
"time")

type ListModelQualityJobDefinitionsRequest struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    EndpointName *string `json:"EndpointName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *MonitoringJobDefinitionSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

