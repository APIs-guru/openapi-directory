package shared

type EventDimensions struct {
	Attributes map[string]AttributeDimension `json:"Attributes,omitempty"`
	EventType  *SetDimension                 `json:"EventType,omitempty"`
	Metrics    map[string]MetricDimension    `json:"Metrics,omitempty"`
}
