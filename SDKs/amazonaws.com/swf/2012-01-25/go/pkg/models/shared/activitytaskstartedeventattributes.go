package shared

type ActivityTaskStartedEventAttributes struct {
	Identity         *string `json:"identity,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
}
