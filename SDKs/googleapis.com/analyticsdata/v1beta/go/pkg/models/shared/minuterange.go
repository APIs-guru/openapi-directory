package shared

type MinuteRange struct {
	EndMinutesAgo   *int32  `json:"endMinutesAgo,omitempty"`
	Name            *string `json:"name,omitempty"`
	StartMinutesAgo *int32  `json:"startMinutesAgo,omitempty"`
}
