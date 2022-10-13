package shared

type Metric struct {
	Benchmark     *MetricBenchmark     `json:"benchmark"`
	Distributions []MetricDistribution `json:"distributions"`
	MetricKey     *string              `json:"metricKey"`
	Value         *string              `json:"value"`
}
