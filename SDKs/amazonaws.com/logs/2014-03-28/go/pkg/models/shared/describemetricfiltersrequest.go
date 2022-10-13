package shared

type DescribeMetricFiltersRequest struct {
	FilterNamePrefix *string `json:"filterNamePrefix"`
	Limit            *int64  `json:"limit"`
	LogGroupName     *string `json:"logGroupName"`
	MetricName       *string `json:"metricName"`
	MetricNamespace  *string `json:"metricNamespace"`
	NextToken        *string `json:"nextToken"`
}
