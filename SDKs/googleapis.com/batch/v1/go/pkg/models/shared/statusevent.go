package shared

// StatusEvent
// Status event
type StatusEvent struct {
	Description   *string        `json:"description,omitempty"`
	EventTime     *string        `json:"eventTime,omitempty"`
	TaskExecution *TaskExecution `json:"taskExecution,omitempty"`
	Type          *string        `json:"type,omitempty"`
}
