package shared

import (
"time")

type GetMaintenanceWindowExecutionResult struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *MaintenanceWindowExecutionStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    TaskIds []string `json:"TaskIds,omitempty"`
    WindowExecutionID *string `json:"WindowExecutionId,omitempty"`
    
}

