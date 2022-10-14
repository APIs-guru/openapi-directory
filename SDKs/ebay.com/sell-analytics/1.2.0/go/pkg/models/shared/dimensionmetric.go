package shared

type DimensionMetric struct {
	Dimension *Dimension `json:"dimension,omitempty"`
	Metrics   []Metric   `json:"metrics,omitempty"`
}
