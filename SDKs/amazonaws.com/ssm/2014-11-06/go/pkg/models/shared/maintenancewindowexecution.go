package shared

import (
"time")

type MaintenanceWindowExecution struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *MaintenanceWindowExecutionStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    WindowExecutionID *string `json:"WindowExecutionId,omitempty"`
    WindowID *string `json:"WindowId,omitempty"`
    
}

