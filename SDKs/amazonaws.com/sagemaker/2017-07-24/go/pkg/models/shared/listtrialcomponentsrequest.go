package shared

import (
"time")

type ListTrialComponentsRequest struct {
    CreatedAfter *time.Time `json:"CreatedAfter,omitempty"`
    CreatedBefore *time.Time `json:"CreatedBefore,omitempty"`
    ExperimentName *string `json:"ExperimentName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *SortTrialComponentsByEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    SourceArn *string `json:"SourceArn,omitempty"`
    TrialName *string `json:"TrialName,omitempty"`
    
}

