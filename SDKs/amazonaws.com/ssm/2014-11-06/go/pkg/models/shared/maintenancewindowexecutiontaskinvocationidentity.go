package shared

import (
	"time"
)

// MaintenanceWindowExecutionTaskInvocationIdentity
// Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.
type MaintenanceWindowExecutionTaskInvocationIdentity struct {
	EndTime           *time.Time                            `json:"EndTime,omitempty"`
	ExecutionID       *string                               `json:"ExecutionId,omitempty"`
	InvocationID      *string                               `json:"InvocationId,omitempty"`
	OwnerInformation  *string                               `json:"OwnerInformation,omitempty"`
	Parameters        *string                               `json:"Parameters,omitempty"`
	StartTime         *time.Time                            `json:"StartTime,omitempty"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status,omitempty"`
	StatusDetails     *string                               `json:"StatusDetails,omitempty"`
	TaskExecutionID   *string                               `json:"TaskExecutionId,omitempty"`
	TaskType          *MaintenanceWindowTaskTypeEnum        `json:"TaskType,omitempty"`
	WindowExecutionID *string                               `json:"WindowExecutionId,omitempty"`
	WindowTargetID    *string                               `json:"WindowTargetId,omitempty"`
}
