package shared

type MetricBenchmark struct {
	Adjustment *string            `json:"adjustment"`
	Basis      *string            `json:"basis"`
	Metadata   *BenchmarkMetadata `json:"metadata"`
	Rating     *string            `json:"rating"`
}
