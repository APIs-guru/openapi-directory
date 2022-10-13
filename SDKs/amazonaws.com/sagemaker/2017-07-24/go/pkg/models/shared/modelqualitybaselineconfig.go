package shared

type ModelQualityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource"`
}
