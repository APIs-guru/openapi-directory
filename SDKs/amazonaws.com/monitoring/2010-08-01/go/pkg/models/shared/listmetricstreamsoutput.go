package shared

type ListMetricStreamsOutput struct {
	Entries   []MetricStreamEntry
	NextToken *string
}
