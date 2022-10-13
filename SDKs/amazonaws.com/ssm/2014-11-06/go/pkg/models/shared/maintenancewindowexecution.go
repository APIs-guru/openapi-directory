package shared

import (
	"time"
)

type MaintenanceWindowExecution struct {
	EndTime           *time.Time                            `json:"EndTime"`
	StartTime         *time.Time                            `json:"StartTime"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status"`
	StatusDetails     *string                               `json:"StatusDetails"`
	WindowExecutionID *string                               `json:"WindowExecutionId"`
	WindowID          *string                               `json:"WindowId"`
}
