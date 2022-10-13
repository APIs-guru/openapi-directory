package shared

type MetricDistribution struct {
	Basis *string        `json:"basis"`
	Data  []Distribution `json:"data"`
}
