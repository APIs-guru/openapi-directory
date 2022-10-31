package shared



type ExecutionSummary struct {
    ExecutionID *string `json:"executionId,omitempty"`
    ManagedDeviceID *string `json:"managedDeviceId,omitempty"`
    State *ExecutionStateEnum `json:"state,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    
}

