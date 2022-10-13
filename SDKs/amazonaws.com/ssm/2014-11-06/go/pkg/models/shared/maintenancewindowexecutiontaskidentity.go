package shared

import (
	"time"
)

type MaintenanceWindowExecutionTaskIdentity struct {
	EndTime           *time.Time                            `json:"EndTime"`
	StartTime         *time.Time                            `json:"StartTime"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status"`
	StatusDetails     *string                               `json:"StatusDetails"`
	TaskArn           *string                               `json:"TaskArn"`
	TaskExecutionID   *string                               `json:"TaskExecutionId"`
	TaskType          *MaintenanceWindowTaskTypeEnum        `json:"TaskType"`
	WindowExecutionID *string                               `json:"WindowExecutionId"`
}
