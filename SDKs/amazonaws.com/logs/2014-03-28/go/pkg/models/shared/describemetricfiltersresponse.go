package shared



type DescribeMetricFiltersResponse struct {
    MetricFilters []MetricFilter `json:"metricFilters,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

