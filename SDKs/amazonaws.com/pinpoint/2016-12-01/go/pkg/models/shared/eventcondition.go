package shared

// EventCondition
// Specifies the conditions to evaluate for an event that applies to an activity in a journey.
type EventCondition struct {
	Dimensions      *EventDimensions `json:"Dimensions,omitempty"`
	MessageActivity *string          `json:"MessageActivity,omitempty"`
}
