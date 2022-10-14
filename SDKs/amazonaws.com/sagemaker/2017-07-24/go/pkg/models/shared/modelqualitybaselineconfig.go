package shared

type ModelQualityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName,omitempty"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
}
