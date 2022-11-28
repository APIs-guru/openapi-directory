package shared

// ModelQuality
// Model quality statistics and constraints.
type ModelQuality struct {
	Constraints *MetricsSource `json:"Constraints,omitempty"`
	Statistics  *MetricsSource `json:"Statistics,omitempty"`
}
