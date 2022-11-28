package shared

// EventStartCondition
// Specifies the settings for an event that causes a journey activity to start.
type EventStartCondition struct {
	EventFilter *EventFilter `json:"EventFilter,omitempty"`
	SegmentID   *string      `json:"SegmentId,omitempty"`
}
