package shared

type DimensionMetric struct {
	Dimension *Dimension `json:"dimension"`
	Metrics   []Metric   `json:"metrics"`
}
