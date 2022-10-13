package shared

type DescribeMetricFiltersResponse struct {
	MetricFilters []MetricFilter `json:"metricFilters"`
	NextToken     *string        `json:"nextToken"`
}
