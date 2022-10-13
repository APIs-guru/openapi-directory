package shared

import (
	"time"
)

type GetMaintenanceWindowExecutionTaskResult struct {
	EndTime           *time.Time                                                 `json:"EndTime"`
	MaxConcurrency    *string                                                    `json:"MaxConcurrency"`
	MaxErrors         *string                                                    `json:"MaxErrors"`
	Priority          *int64                                                     `json:"Priority"`
	ServiceRole       *string                                                    `json:"ServiceRole"`
	StartTime         *time.Time                                                 `json:"StartTime"`
	Status            *MaintenanceWindowExecutionStatusEnum                      `json:"Status"`
	StatusDetails     *string                                                    `json:"StatusDetails"`
	TaskArn           *string                                                    `json:"TaskArn"`
	TaskExecutionID   *string                                                    `json:"TaskExecutionId"`
	TaskParameters    []map[string]MaintenanceWindowTaskParameterValueExpression `json:"TaskParameters"`
	Type              *MaintenanceWindowTaskTypeEnum                             `json:"Type"`
	WindowExecutionID *string                                                    `json:"WindowExecutionId"`
}
