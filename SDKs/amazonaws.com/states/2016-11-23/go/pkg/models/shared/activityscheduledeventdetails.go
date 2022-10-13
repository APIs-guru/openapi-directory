package shared

type ActivityScheduledEventDetails struct {
	HeartbeatInSeconds *int64                            `json:"heartbeatInSeconds"`
	Input              *string                           `json:"input"`
	InputDetails       *HistoryEventExecutionDataDetails `json:"inputDetails"`
	Resource           string                            `json:"resource"`
	TimeoutInSeconds   *int64                            `json:"timeoutInSeconds"`
}
