package shared

// ActivityTaskCanceledEventAttributes
// Provides the details of the <code>ActivityTaskCanceled</code> event.
type ActivityTaskCanceledEventAttributes struct {
	Details                      *string `json:"details,omitempty"`
	LatestCancelRequestedEventID *int64  `json:"latestCancelRequestedEventId,omitempty"`
	ScheduledEventID             int64   `json:"scheduledEventId"`
	StartedEventID               int64   `json:"startedEventId"`
}
