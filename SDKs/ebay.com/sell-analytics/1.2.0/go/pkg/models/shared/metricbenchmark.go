package shared

type MetricBenchmark struct {
	Adjustment *string            `json:"adjustment,omitempty"`
	Basis      *string            `json:"basis,omitempty"`
	Metadata   *BenchmarkMetadata `json:"metadata,omitempty"`
	Rating     *string            `json:"rating,omitempty"`
}
