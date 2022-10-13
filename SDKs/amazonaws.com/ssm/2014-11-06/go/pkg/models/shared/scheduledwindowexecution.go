package shared

type ScheduledWindowExecution struct {
	ExecutionTime *string `json:"ExecutionTime"`
	Name          *string `json:"Name"`
	WindowID      *string `json:"WindowId"`
}
