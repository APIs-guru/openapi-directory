package shared

import (
"time")

type ListTrialsRequest struct {
    CreatedAfter *time.Time `json:"CreatedAfter,omitempty"`
    CreatedBefore *time.Time `json:"CreatedBefore,omitempty"`
    ExperimentName *string `json:"ExperimentName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *SortTrialsByEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    TrialComponentName *string `json:"TrialComponentName,omitempty"`
    
}

