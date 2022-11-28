package shared

// ScheduledWindowExecution
// Information about a scheduled execution for a maintenance window.
type ScheduledWindowExecution struct {
	ExecutionTime *string `json:"ExecutionTime,omitempty"`
	Name          *string `json:"Name,omitempty"`
	WindowID      *string `json:"WindowId,omitempty"`
}
