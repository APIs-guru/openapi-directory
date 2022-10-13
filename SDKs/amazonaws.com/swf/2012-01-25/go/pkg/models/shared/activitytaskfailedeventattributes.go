package shared

type ActivityTaskFailedEventAttributes struct {
	Details          *string `json:"details"`
	Reason           *string `json:"reason"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
