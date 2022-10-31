package shared

import (
"time")

type DescribeMonitoringScheduleResponse struct {
    CreationTime time.Time `json:"CreationTime"`
    EndpointName *string `json:"EndpointName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    LastMonitoringExecutionSummary *MonitoringExecutionSummary `json:"LastMonitoringExecutionSummary,omitempty"`
    MonitoringScheduleArn string `json:"MonitoringScheduleArn"`
    MonitoringScheduleConfig MonitoringScheduleConfig `json:"MonitoringScheduleConfig"`
    MonitoringScheduleName string `json:"MonitoringScheduleName"`
    MonitoringScheduleStatus ScheduleStatusEnum `json:"MonitoringScheduleStatus"`
    MonitoringType *MonitoringTypeEnum `json:"MonitoringType,omitempty"`
    
}

