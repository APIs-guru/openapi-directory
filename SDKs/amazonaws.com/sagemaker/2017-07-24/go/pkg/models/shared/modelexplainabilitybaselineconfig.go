package shared

type ModelExplainabilityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource"`
}
