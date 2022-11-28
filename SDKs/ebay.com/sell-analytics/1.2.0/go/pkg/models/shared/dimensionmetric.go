package shared

// DimensionMetric
// This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
type DimensionMetric struct {
	Dimension *Dimension `json:"dimension,omitempty"`
	Metrics   []Metric   `json:"metrics,omitempty"`
}
