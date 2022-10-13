package shared

type EventCondition struct {
	Dimensions      *EventDimensions `json:"Dimensions"`
	MessageActivity *string          `json:"MessageActivity"`
}
