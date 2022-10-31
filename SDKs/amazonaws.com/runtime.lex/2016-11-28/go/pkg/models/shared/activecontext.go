package shared

type ActiveContext struct {
	Name       string                  `json:"name"`
	Parameters map[string]string       `json:"parameters"`
	TimeToLive ActiveContextTimeToLive `json:"timeToLive"`
}
