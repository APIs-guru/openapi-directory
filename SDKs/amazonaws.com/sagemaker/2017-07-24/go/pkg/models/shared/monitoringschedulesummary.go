package shared

import (
	"time"
)

type MonitoringScheduleSummary struct {
	CreationTime                time.Time           `json:"CreationTime"`
	EndpointName                *string             `json:"EndpointName,omitempty"`
	LastModifiedTime            time.Time           `json:"LastModifiedTime"`
	MonitoringJobDefinitionName *string             `json:"MonitoringJobDefinitionName,omitempty"`
	MonitoringScheduleArn       string              `json:"MonitoringScheduleArn"`
	MonitoringScheduleName      string              `json:"MonitoringScheduleName"`
	MonitoringScheduleStatus    ScheduleStatusEnum  `json:"MonitoringScheduleStatus"`
	MonitoringType              *MonitoringTypeEnum `json:"MonitoringType,omitempty"`
}
