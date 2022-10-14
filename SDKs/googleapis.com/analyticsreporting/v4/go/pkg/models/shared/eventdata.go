package shared

type EventData struct {
	EventAction   *string `json:"eventAction,omitempty"`
	EventCategory *string `json:"eventCategory,omitempty"`
	EventCount    *string `json:"eventCount,omitempty"`
	EventLabel    *string `json:"eventLabel,omitempty"`
	EventValue    *string `json:"eventValue,omitempty"`
}
