package shared

import (
	"time"
)

type MonitoringExecutionSummary struct {
	CreationTime                time.Time           `json:"CreationTime"`
	EndpointName                *string             `json:"EndpointName"`
	FailureReason               *string             `json:"FailureReason"`
	LastModifiedTime            time.Time           `json:"LastModifiedTime"`
	MonitoringExecutionStatus   ExecutionStatusEnum `json:"MonitoringExecutionStatus"`
	MonitoringJobDefinitionName *string             `json:"MonitoringJobDefinitionName"`
	MonitoringScheduleName      string              `json:"MonitoringScheduleName"`
	MonitoringType              *MonitoringTypeEnum `json:"MonitoringType"`
	ProcessingJobArn            *string             `json:"ProcessingJobArn"`
	ScheduledTime               time.Time           `json:"ScheduledTime"`
}
