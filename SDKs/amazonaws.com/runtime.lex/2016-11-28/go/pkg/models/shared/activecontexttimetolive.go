package shared

type ActiveContextTimeToLive struct {
	TimeToLiveInSeconds *int64 `json:"timeToLiveInSeconds,omitempty"`
	TurnsToLive         *int64 `json:"turnsToLive,omitempty"`
}
