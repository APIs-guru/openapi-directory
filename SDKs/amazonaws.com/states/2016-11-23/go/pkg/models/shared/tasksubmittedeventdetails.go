package shared

// TaskSubmittedEventDetails
// Contains details about a task submitted to a resource .
type TaskSubmittedEventDetails struct {
	Output        *string                           `json:"output,omitempty"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
	Resource      string                            `json:"resource"`
	ResourceType  string                            `json:"resourceType"`
}
