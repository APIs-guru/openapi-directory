package shared

type StartCondition struct {
	Description           *string              `json:"Description"`
	EventStartCondition   *EventStartCondition `json:"EventStartCondition"`
	SegmentStartCondition *SegmentCondition    `json:"SegmentStartCondition"`
}
