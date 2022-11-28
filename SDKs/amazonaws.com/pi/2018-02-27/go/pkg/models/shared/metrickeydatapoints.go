package shared

// MetricKeyDataPoints
// A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
type MetricKeyDataPoints struct {
	DataPoints []DataPoint                `json:"DataPoints,omitempty"`
	Key        *ResponseResourceMetricKey `json:"Key,omitempty"`
}
