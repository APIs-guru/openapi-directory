package shared

type ListMetricsOutput struct {
	Metrics   []Metric
	NextToken *string
}
