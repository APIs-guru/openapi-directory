package shared

// Activity
// An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
type Activity struct {
	CombinedEvent *Event  `json:"combinedEvent,omitempty"`
	SingleEvents  []Event `json:"singleEvents,omitempty"`
}
