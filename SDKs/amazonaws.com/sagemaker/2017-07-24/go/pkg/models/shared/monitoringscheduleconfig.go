package shared

type MonitoringScheduleConfig struct {
	MonitoringJobDefinition     *MonitoringJobDefinition `json:"MonitoringJobDefinition"`
	MonitoringJobDefinitionName *string                  `json:"MonitoringJobDefinitionName"`
	MonitoringType              *MonitoringTypeEnum      `json:"MonitoringType"`
	ScheduleConfig              *ScheduleConfig          `json:"ScheduleConfig"`
}
