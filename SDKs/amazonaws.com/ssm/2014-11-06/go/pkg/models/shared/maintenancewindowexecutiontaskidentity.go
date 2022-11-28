package shared

import (
	"time"
)

// MaintenanceWindowExecutionTaskIdentity
// Information about a task execution performed as part of a maintenance window execution.
type MaintenanceWindowExecutionTaskIdentity struct {
	EndTime           *time.Time                            `json:"EndTime,omitempty"`
	StartTime         *time.Time                            `json:"StartTime,omitempty"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status,omitempty"`
	StatusDetails     *string                               `json:"StatusDetails,omitempty"`
	TaskArn           *string                               `json:"TaskArn,omitempty"`
	TaskExecutionID   *string                               `json:"TaskExecutionId,omitempty"`
	TaskType          *MaintenanceWindowTaskTypeEnum        `json:"TaskType,omitempty"`
	WindowExecutionID *string                               `json:"WindowExecutionId,omitempty"`
}
