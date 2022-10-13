package shared

type DataQualityBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource"`
	StatisticsResource  *MonitoringStatisticsResource  `json:"StatisticsResource"`
}
