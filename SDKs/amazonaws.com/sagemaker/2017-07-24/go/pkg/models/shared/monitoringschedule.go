package shared

import (
	"time"
)

type MonitoringSchedule struct {
	CreationTime                   *time.Time                  `json:"CreationTime"`
	EndpointName                   *string                     `json:"EndpointName"`
	FailureReason                  *string                     `json:"FailureReason"`
	LastModifiedTime               *time.Time                  `json:"LastModifiedTime"`
	LastMonitoringExecutionSummary *MonitoringExecutionSummary `json:"LastMonitoringExecutionSummary"`
	MonitoringScheduleArn          *string                     `json:"MonitoringScheduleArn"`
	MonitoringScheduleConfig       *MonitoringScheduleConfig   `json:"MonitoringScheduleConfig"`
	MonitoringScheduleName         *string                     `json:"MonitoringScheduleName"`
	MonitoringScheduleStatus       *ScheduleStatusEnum         `json:"MonitoringScheduleStatus"`
	MonitoringType                 *MonitoringTypeEnum         `json:"MonitoringType"`
	Tags                           []Tag                       `json:"Tags"`
}
