package shared

import (
	"time"
)

type GetMaintenanceWindowExecutionResult struct {
	EndTime           *time.Time                            `json:"EndTime"`
	StartTime         *time.Time                            `json:"StartTime"`
	Status            *MaintenanceWindowExecutionStatusEnum `json:"Status"`
	StatusDetails     *string                               `json:"StatusDetails"`
	TaskIds           []string                              `json:"TaskIds"`
	WindowExecutionID *string                               `json:"WindowExecutionId"`
}
