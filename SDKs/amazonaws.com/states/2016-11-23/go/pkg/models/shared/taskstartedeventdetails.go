package shared

// TaskStartedEventDetails
// Contains details about the start of a task during an execution.
type TaskStartedEventDetails struct {
	Resource     string `json:"resource"`
	ResourceType string `json:"resourceType"`
}
