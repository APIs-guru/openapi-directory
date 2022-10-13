package shared

type EventDimensions struct {
	Attributes map[string]AttributeDimension `json:"Attributes"`
	EventType  *SetDimension                 `json:"EventType"`
	Metrics    map[string]MetricDimension    `json:"Metrics"`
}
