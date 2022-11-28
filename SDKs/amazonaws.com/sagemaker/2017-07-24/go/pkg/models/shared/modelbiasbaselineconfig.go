package shared

// ModelBiasBaselineConfig
// The configuration for a baseline model bias job.
type ModelBiasBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName,omitempty"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
}
