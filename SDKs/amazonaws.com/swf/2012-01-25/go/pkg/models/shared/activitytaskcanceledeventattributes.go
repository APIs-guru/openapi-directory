package shared

type ActivityTaskCanceledEventAttributes struct {
	Details                      *string `json:"details"`
	LatestCancelRequestedEventID *int64  `json:"latestCancelRequestedEventId"`
	ScheduledEventID             int64   `json:"scheduledEventId"`
	StartedEventID               int64   `json:"startedEventId"`
}
