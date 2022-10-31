package shared

type ModelQuality struct {
	Constraints *MetricsSource `json:"Constraints,omitempty"`
	Statistics  *MetricsSource `json:"Statistics,omitempty"`
}
