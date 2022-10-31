package shared

import (
"time")

type GetMaintenanceWindowExecutionTaskInvocationResult struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    ExecutionID *string `json:"ExecutionId,omitempty"`
    InvocationID *string `json:"InvocationId,omitempty"`
    OwnerInformation *string `json:"OwnerInformation,omitempty"`
    Parameters *string `json:"Parameters,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *MaintenanceWindowExecutionStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    TaskExecutionID *string `json:"TaskExecutionId,omitempty"`
    TaskType *MaintenanceWindowTaskTypeEnum `json:"TaskType,omitempty"`
    WindowExecutionID *string `json:"WindowExecutionId,omitempty"`
    WindowTargetID *string `json:"WindowTargetId,omitempty"`
    
}

