package shared

import (
	"time"
)

type GetMaintenanceWindowExecutionTaskInvocationResult struct {
	EndTime           *time.Time                            `json:"EndTime"`
	ExecutionID       *string                               `json:"ExecutionId"`
	InvocationID      *string                               `json:"InvocationId"`
	OwnerInformation  *string                               `json:"OwnerInformation"`
	Parameters        *string                               `json:"Parameters"`
	StartTime         *time.Time                            `json:"StartTime"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status"`
	StatusDetails     *string                               `json:"StatusDetails"`
	TaskExecutionID   *string                               `json:"TaskExecutionId"`
	TaskType          *MaintenanceWindowTaskTypeEnum        `json:"TaskType"`
	WindowExecutionID *string                               `json:"WindowExecutionId"`
	WindowTargetID    *string                               `json:"WindowTargetId"`
}
