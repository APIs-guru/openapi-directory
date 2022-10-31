package shared

import (
"time")

type GetInsightImpactGraphResult struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    InsightID *string `json:"InsightId,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServiceGraphEndTime *time.Time `json:"ServiceGraphEndTime,omitempty"`
    ServiceGraphStartTime *time.Time `json:"ServiceGraphStartTime,omitempty"`
    Services []InsightImpactGraphService `json:"Services,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

