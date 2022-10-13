package shared

type MinuteRange struct {
	EndMinutesAgo   *int32  `json:"endMinutesAgo"`
	Name            *string `json:"name"`
	StartMinutesAgo *int32  `json:"startMinutesAgo"`
}
