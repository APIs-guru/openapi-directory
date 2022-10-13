package shared

type DecisionTaskStartedEventAttributes struct {
	Identity         *string `json:"identity"`
	ScheduledEventID int64   `json:"scheduledEventId"`
}
