package shared

type ScheduledWindowExecution struct {
	ExecutionTime *string `json:"ExecutionTime,omitempty"`
	Name          *string `json:"Name,omitempty"`
	WindowID      *string `json:"WindowId,omitempty"`
}
