package shared

// Task
// A Cloud Batch task.
type Task struct {
	Name   *string     `json:"name,omitempty"`
	Status *TaskStatus `json:"status,omitempty"`
}
