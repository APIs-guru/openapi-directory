package shared

// BenchmarkMetadata
// This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
type BenchmarkMetadata struct {
	Average *string `json:"average,omitempty"`
}
