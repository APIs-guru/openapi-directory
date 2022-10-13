package shared

type Event struct {
	Attributes map[string]string  `json:"attributes"`
	EventType  string             `json:"eventType"`
	Metrics    map[string]float64 `json:"metrics"`
	Session    *Session           `json:"session"`
	Timestamp  string             `json:"timestamp"`
	Version    *string            `json:"version"`
}
