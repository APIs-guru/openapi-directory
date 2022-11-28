package shared

// ModelDataQuality
// Data quality constraints and statistics for a model.
type ModelDataQuality struct {
	Constraints *MetricsSource `json:"Constraints,omitempty"`
	Statistics  *MetricsSource `json:"Statistics,omitempty"`
}
