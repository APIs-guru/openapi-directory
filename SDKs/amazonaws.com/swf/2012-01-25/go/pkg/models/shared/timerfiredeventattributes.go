package shared

type TimerFiredEventAttributes struct {
	StartedEventID int64  `json:"startedEventId"`
	TimerID        string `json:"timerId"`
}
