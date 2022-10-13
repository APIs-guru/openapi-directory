package shared

type ActivityTaskTimedOutEventAttributes struct {
	Details          *string                     `json:"details"`
	ScheduledEventID int64                       `json:"scheduledEventId"`
	StartedEventID   int64                       `json:"startedEventId"`
	TimeoutType      ActivityTaskTimeoutTypeEnum `json:"timeoutType"`
}
