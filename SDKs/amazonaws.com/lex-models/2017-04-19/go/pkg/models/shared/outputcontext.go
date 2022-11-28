package shared

// OutputContext
// The specification of an output context that is set when an intent is fulfilled.
type OutputContext struct {
	Name                string `json:"name"`
	TimeToLiveInSeconds int64  `json:"timeToLiveInSeconds"`
	TurnsToLive         int64  `json:"turnsToLive"`
}
