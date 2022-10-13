package shared

type EventData struct {
	EventAction   *string `json:"eventAction"`
	EventCategory *string `json:"eventCategory"`
	EventCount    *string `json:"eventCount"`
	EventLabel    *string `json:"eventLabel"`
	EventValue    *string `json:"eventValue"`
}
