package shared

type ExecutionSummary struct {
	ExecutionID     *string             `json:"executionId"`
	ManagedDeviceID *string             `json:"managedDeviceId"`
	State           *ExecutionStateEnum `json:"state"`
	TaskID          *string             `json:"taskId"`
}
