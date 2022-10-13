package shared

type MonitoringBaselineConfig struct {
	BaseliningJobName   *string                        `json:"BaseliningJobName"`
	ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource"`
	StatisticsResource  *MonitoringStatisticsResource  `json:"StatisticsResource"`
}
