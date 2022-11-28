package shared

// EventDimensions
// Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
type EventDimensions struct {
	Attributes map[string]AttributeDimension `json:"Attributes,omitempty"`
	EventType  *SetDimension                 `json:"EventType,omitempty"`
	Metrics    map[string]MetricDimension    `json:"Metrics,omitempty"`
}
