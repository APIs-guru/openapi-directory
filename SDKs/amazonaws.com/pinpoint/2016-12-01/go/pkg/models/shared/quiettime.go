package shared

// QuietTime
// Specifies the start and end times that define a time range when messages aren't sent to endpoints.
type QuietTime struct {
	End   *string `json:"End,omitempty"`
	Start *string `json:"Start,omitempty"`
}
