package shared

// EventFilter
// Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
type EventFilter struct {
	Dimensions EventDimensions `json:"Dimensions"`
	FilterType FilterTypeEnum  `json:"FilterType"`
}
