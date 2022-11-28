package shared

// OutputContext
// Describes a session context that is activated when an intent is fulfilled.
type OutputContext struct {
	Name                string `json:"name"`
	TimeToLiveInSeconds int64  `json:"timeToLiveInSeconds"`
	TurnsToLive         int64  `json:"turnsToLive"`
}
