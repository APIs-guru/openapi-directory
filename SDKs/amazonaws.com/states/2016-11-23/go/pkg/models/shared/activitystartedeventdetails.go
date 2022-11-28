package shared

// ActivityStartedEventDetails
// Contains details about the start of an activity during an execution.
type ActivityStartedEventDetails struct {
	WorkerName *string `json:"workerName,omitempty"`
}
