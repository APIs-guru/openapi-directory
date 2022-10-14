package shared

type EventStartCondition struct {
	EventFilter *EventFilter `json:"EventFilter,omitempty"`
	SegmentID   *string      `json:"SegmentId,omitempty"`
}
