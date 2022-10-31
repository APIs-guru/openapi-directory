package shared

import (
	"time"
)

type DescribeExecutionOutput struct {
	ExecutionID     *string             `json:"executionId,omitempty"`
	LastUpdatedAt   *time.Time          `json:"lastUpdatedAt,omitempty"`
	ManagedDeviceID *string             `json:"managedDeviceId,omitempty"`
	StartedAt       *time.Time          `json:"startedAt,omitempty"`
	State           *ExecutionStateEnum `json:"state,omitempty"`
	TaskID          *string             `json:"taskId,omitempty"`
}
