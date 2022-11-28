package shared

// ActiveContextTimeToLive
// The time that a context is active. You can specify the time to live in seconds or in conversation turns.
type ActiveContextTimeToLive struct {
	TimeToLiveInSeconds int64 `json:"timeToLiveInSeconds"`
	TurnsToLive         int64 `json:"turnsToLive"`
}
