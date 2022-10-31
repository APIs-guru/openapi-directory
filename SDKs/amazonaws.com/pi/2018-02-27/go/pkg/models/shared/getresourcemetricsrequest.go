package shared

import (
"time")

type GetResourceMetricsRequest struct {
    EndTime time.Time `json:"EndTime"`
    Identifier string `json:"Identifier"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MetricQueries []MetricQuery `json:"MetricQueries"`
    NextToken *string `json:"NextToken,omitempty"`
    PeriodInSeconds *int64 `json:"PeriodInSeconds,omitempty"`
    ServiceType ServiceTypeEnum `json:"ServiceType"`
    StartTime time.Time `json:"StartTime"`
    
}

