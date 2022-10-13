package shared

import (
	"time"
)

type DescribeExecutionOutput struct {
	ExecutionID     *string             `json:"executionId"`
	LastUpdatedAt   *time.Time          `json:"lastUpdatedAt"`
	ManagedDeviceID *string             `json:"managedDeviceId"`
	StartedAt       *time.Time          `json:"startedAt"`
	State           *ExecutionStateEnum `json:"state"`
	TaskID          *string             `json:"taskId"`
}
