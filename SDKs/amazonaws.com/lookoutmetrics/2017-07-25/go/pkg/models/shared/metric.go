package shared

// Metric
// A calculation made by contrasting a measure and a dimension from your source data.
type Metric struct {
	AggregationFunction AggregationFunctionEnum `json:"AggregationFunction"`
	MetricName          string                  `json:"MetricName"`
	Namespace           *string                 `json:"Namespace,omitempty"`
}
