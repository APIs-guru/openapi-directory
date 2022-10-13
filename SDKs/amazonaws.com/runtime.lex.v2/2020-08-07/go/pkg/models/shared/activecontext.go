package shared

type ActiveContext struct {
	ContextAttributes map[string]string       `json:"contextAttributes"`
	Name              string                  `json:"name"`
	TimeToLive        ActiveContextTimeToLive `json:"timeToLive"`
}
