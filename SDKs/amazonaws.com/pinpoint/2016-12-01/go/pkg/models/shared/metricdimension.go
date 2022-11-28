package shared

// MetricDimension
// Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
type MetricDimension struct {
	ComparisonOperator string  `json:"ComparisonOperator"`
	Value              float64 `json:"Value"`
}
