package shared

// ModelExplainabilityBaselineConfig
// The configuration for a baseline model explainability job.
type ModelExplainabilityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName,omitempty"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
}
