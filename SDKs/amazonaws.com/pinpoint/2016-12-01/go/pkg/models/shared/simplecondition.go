package shared

type SimpleCondition struct {
	EventCondition    *EventCondition    `json:"EventCondition,omitempty"`
	SegmentCondition  *SegmentCondition  `json:"SegmentCondition,omitempty"`
	SegmentDimensions *SegmentDimensions `json:"SegmentDimensions,omitempty"`
}
