package shared

type MonitoringScheduleConfig struct {
	MonitoringJobDefinition     *MonitoringJobDefinition `json:"MonitoringJobDefinition,omitempty"`
	MonitoringJobDefinitionName *string                  `json:"MonitoringJobDefinitionName,omitempty"`
	MonitoringType              *MonitoringTypeEnum      `json:"MonitoringType,omitempty"`
	ScheduleConfig              *ScheduleConfig          `json:"ScheduleConfig,omitempty"`
}
