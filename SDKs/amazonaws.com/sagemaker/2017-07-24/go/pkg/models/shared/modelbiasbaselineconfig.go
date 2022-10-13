package shared

type ModelBiasBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource"`
}
