package shared

// MinuteRange
// A contiguous set of minutes: startMinutesAgo, startMinutesAgo + 1, ..., endMinutesAgo. Requests are allowed up to 2 minute ranges.
type MinuteRange struct {
	EndMinutesAgo   *int32  `json:"endMinutesAgo,omitempty"`
	Name            *string `json:"name,omitempty"`
	StartMinutesAgo *int32  `json:"startMinutesAgo,omitempty"`
}
