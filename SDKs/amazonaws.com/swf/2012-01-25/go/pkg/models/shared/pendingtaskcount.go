package shared

// PendingTaskCount
// Contains the count of tasks in a task list.
type PendingTaskCount struct {
	Count     int64 `json:"count"`
	Truncated *bool `json:"truncated,omitempty"`
}
