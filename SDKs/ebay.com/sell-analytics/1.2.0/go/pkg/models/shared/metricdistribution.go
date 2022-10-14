package shared

type MetricDistribution struct {
	Basis *string        `json:"basis,omitempty"`
	Data  []Distribution `json:"data,omitempty"`
}
