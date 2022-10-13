package shared

type Metric struct {
	AggregationFunction AggregationFunctionEnum `json:"AggregationFunction"`
	MetricName          string                  `json:"MetricName"`
	Namespace           *string                 `json:"Namespace"`
}
