package shared

// ResponseResourceMetricKey
// An object describing a Performance Insights metric and one or more dimensions for that metric.
type ResponseResourceMetricKey struct {
	Dimensions map[string]string `json:"Dimensions,omitempty"`
	Metric     string            `json:"Metric"`
}
