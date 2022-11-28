package shared

// DatetimeRange
// Describes a time range, in ISO8601-UTC format.
type DatetimeRange struct {
	Begin string  `json:"Begin"`
	End   *string `json:"End,omitempty"`
}
