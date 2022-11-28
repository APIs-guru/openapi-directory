package shared

// Metric
// This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
type Metric struct {
	Benchmark     *MetricBenchmark     `json:"benchmark,omitempty"`
	Distributions []MetricDistribution `json:"distributions,omitempty"`
	MetricKey     *string              `json:"metricKey,omitempty"`
	Value         *string              `json:"value,omitempty"`
}
