package shared

// TimerFiredEventAttributes
// Provides the details of the <code>TimerFired</code> event.
type TimerFiredEventAttributes struct {
	StartedEventID int64  `json:"startedEventId"`
	TimerID        string `json:"timerId"`
}
