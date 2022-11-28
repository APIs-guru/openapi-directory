package shared

// MetricDistribution
// This complex data type describes the metric distribution by basis.
type MetricDistribution struct {
	Basis *string        `json:"basis,omitempty"`
	Data  []Distribution `json:"data,omitempty"`
}
