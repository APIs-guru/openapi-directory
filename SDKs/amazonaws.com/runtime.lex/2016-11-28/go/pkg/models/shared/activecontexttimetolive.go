package shared

// ActiveContextTimeToLive
// The length of time or number of turns that a context remains active.
type ActiveContextTimeToLive struct {
	TimeToLiveInSeconds *int64 `json:"timeToLiveInSeconds,omitempty"`
	TurnsToLive         *int64 `json:"turnsToLive,omitempty"`
}
