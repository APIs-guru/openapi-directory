package shared

// ModelQualityBaselineConfig
// Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
type ModelQualityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName,omitempty"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
}
