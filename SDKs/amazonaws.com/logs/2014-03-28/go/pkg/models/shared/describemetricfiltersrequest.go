package shared



type DescribeMetricFiltersRequest struct {
    FilterNamePrefix *string `json:"filterNamePrefix,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    LogGroupName *string `json:"logGroupName,omitempty"`
    MetricName *string `json:"metricName,omitempty"`
    MetricNamespace *string `json:"metricNamespace,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

