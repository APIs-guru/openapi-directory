package shared

// TaskSummary
// Information about the task assigned to one or many devices.
type TaskSummary struct {
	State   *TaskStateEnum    `json:"state,omitempty"`
	Tags    map[string]string `json:"tags,omitempty"`
	TaskArn *string           `json:"taskArn,omitempty"`
	TaskID  string            `json:"taskId"`
}
