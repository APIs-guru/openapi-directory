package shared

type EventCondition struct {
	Dimensions      *EventDimensions `json:"Dimensions,omitempty"`
	MessageActivity *string          `json:"MessageActivity,omitempty"`
}
