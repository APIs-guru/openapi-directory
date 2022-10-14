package shared

import (
	"time"
)

type MonitoringExecutionSummary struct {
	CreationTime                time.Time           `json:"CreationTime"`
	EndpointName                *string             `json:"EndpointName,omitempty"`
	FailureReason               *string             `json:"FailureReason,omitempty"`
	LastModifiedTime            time.Time           `json:"LastModifiedTime"`
	MonitoringExecutionStatus   ExecutionStatusEnum `json:"MonitoringExecutionStatus"`
	MonitoringJobDefinitionName *string             `json:"MonitoringJobDefinitionName,omitempty"`
	MonitoringScheduleName      string              `json:"MonitoringScheduleName"`
	MonitoringType              *MonitoringTypeEnum `json:"MonitoringType,omitempty"`
	ProcessingJobArn            *string             `json:"ProcessingJobArn,omitempty"`
	ScheduledTime               time.Time           `json:"ScheduledTime"`
}
