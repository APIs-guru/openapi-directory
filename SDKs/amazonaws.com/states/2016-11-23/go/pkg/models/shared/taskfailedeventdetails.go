package shared

// TaskFailedEventDetails
// Contains details about a task failure event.
type TaskFailedEventDetails struct {
	Cause        *string `json:"cause,omitempty"`
	Error        *string `json:"error,omitempty"`
	Resource     string  `json:"resource"`
	ResourceType string  `json:"resourceType"`
}
