package shared

// StartCondition
// Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
type StartCondition struct {
	Description           *string              `json:"Description,omitempty"`
	EventStartCondition   *EventStartCondition `json:"EventStartCondition,omitempty"`
	SegmentStartCondition *SegmentCondition    `json:"SegmentStartCondition,omitempty"`
}
