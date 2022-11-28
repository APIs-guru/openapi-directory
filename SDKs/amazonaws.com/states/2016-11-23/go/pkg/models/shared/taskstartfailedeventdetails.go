package shared

// TaskStartFailedEventDetails
// Contains details about a task that failed to start during an execution.
type TaskStartFailedEventDetails struct {
	Cause        *string `json:"cause,omitempty"`
	Error        *string `json:"error,omitempty"`
	Resource     string  `json:"resource"`
	ResourceType string  `json:"resourceType"`
}
