package shared

// AgentTaskInfo
// Task Info
type AgentTaskInfo struct {
	Runnable   *string     `json:"runnable,omitempty"`
	TaskID     *string     `json:"taskId,omitempty"`
	TaskStatus *TaskStatus `json:"taskStatus,omitempty"`
}
