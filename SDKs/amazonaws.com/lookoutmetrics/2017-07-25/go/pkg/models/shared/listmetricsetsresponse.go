package shared



type ListMetricSetsResponse struct {
    MetricSetSummaryList []MetricSetSummary `json:"MetricSetSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

