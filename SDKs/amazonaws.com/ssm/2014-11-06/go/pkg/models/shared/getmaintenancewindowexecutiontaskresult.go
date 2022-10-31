package shared

import (
	"time"
)

type GetMaintenanceWindowExecutionTaskResult struct {
	EndTime           *time.Time                                                 `json:"EndTime,omitempty"`
	MaxConcurrency    *string                                                    `json:"MaxConcurrency,omitempty"`
	MaxErrors         *string                                                    `json:"MaxErrors,omitempty"`
	Priority          *int64                                                     `json:"Priority,omitempty"`
	ServiceRole       *string                                                    `json:"ServiceRole,omitempty"`
	StartTime         *time.Time                                                 `json:"StartTime,omitempty"`
	Status            *MaintenanceWindowExecutionStatusEnum                      `json:"Status,omitempty"`
	StatusDetails     *string                                                    `json:"StatusDetails,omitempty"`
	TaskArn           *string                                                    `json:"TaskArn,omitempty"`
	TaskExecutionID   *string                                                    `json:"TaskExecutionId,omitempty"`
	TaskParameters    []map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters,omitempty"`
	Type              *MaintenanceWindowTaskTypeEnum                             `json:"Type,omitempty"`
	WindowExecutionID *string                                                    `json:"WindowExecutionId,omitempty"`
}
