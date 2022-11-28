package shared

// TaskSubmitFailedEventDetails
// Contains details about a task that failed to submit during an execution.
type TaskSubmitFailedEventDetails struct {
	Cause        *string `json:"cause,omitempty"`
	Error        *string `json:"error,omitempty"`
	Resource     string  `json:"resource"`
	ResourceType string  `json:"resourceType"`
}
