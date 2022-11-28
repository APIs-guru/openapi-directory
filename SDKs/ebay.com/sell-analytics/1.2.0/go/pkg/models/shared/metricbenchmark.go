package shared

// MetricBenchmark
// This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
type MetricBenchmark struct {
	Adjustment *string            `json:"adjustment,omitempty"`
	Basis      *string            `json:"basis,omitempty"`
	Metadata   *BenchmarkMetadata `json:"metadata,omitempty"`
	Rating     *string            `json:"rating,omitempty"`
}
