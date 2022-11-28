package shared

// ActivityScheduledEventDetails
// Contains details about an activity scheduled during an execution.
type ActivityScheduledEventDetails struct {
	HeartbeatInSeconds *int64                            `json:"heartbeatInSeconds,omitempty"`
	Input              *string                           `json:"input,omitempty"`
	InputDetails       *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	Resource           string                            `json:"resource"`
	TimeoutInSeconds   *int64                            `json:"timeoutInSeconds,omitempty"`
}
