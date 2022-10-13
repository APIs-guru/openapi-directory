package shared

type EventStartCondition struct {
	EventFilter *EventFilter `json:"EventFilter"`
	SegmentID   *string      `json:"SegmentId"`
}
