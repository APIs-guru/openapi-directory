package shared

type SimpleCondition struct {
	EventCondition    *EventCondition    `json:"EventCondition"`
	SegmentCondition  *SegmentCondition  `json:"SegmentCondition"`
	SegmentDimensions *SegmentDimensions `json:"SegmentDimensions"`
}
