package shared

type LambdaFunctionCompletedEventAttributes struct {
	Result           *string `json:"result"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
