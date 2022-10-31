package shared

import (
"time")

type MonitoringSchedule struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    EndpointName *string `json:"EndpointName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    LastMonitoringExecutionSummary *MonitoringExecutionSummary `json:"LastMonitoringExecutionSummary,omitempty"`
    MonitoringScheduleArn *string `json:"MonitoringScheduleArn,omitempty"`
    MonitoringScheduleConfig *MonitoringScheduleConfig `json:"MonitoringScheduleConfig,omitempty"`
    MonitoringScheduleName *string `json:"MonitoringScheduleName,omitempty"`
    MonitoringScheduleStatus *ScheduleStatusEnum `json:"MonitoringScheduleStatus,omitempty"`
    MonitoringType *MonitoringTypeEnum `json:"MonitoringType,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

