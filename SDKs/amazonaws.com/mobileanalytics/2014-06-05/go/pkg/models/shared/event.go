package shared

// Event
// A JSON object representing a batch of unique event occurrences in your app.
type Event struct {
	Attributes map[string]string  `json:"attributes,omitempty"`
	EventType  string             `json:"eventType"`
	Metrics    map[string]float64 `json:"metrics,omitempty"`
	Session    *Session           `json:"session,omitempty"`
	Timestamp  string             `json:"timestamp"`
	Version    *string            `json:"version,omitempty"`
}
