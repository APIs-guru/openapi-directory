package shared

type ActivityTaskStartedEventAttributes struct {
	Identity         *string `json:"identity"`
	ScheduledEventID int64   `json:"scheduledEventId"`
}
