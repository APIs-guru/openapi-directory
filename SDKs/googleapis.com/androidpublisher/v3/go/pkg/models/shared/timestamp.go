package shared

// Timestamp
// A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
type Timestamp struct {
	Nanos   *int32  `json:"nanos,omitempty"`
	Seconds *string `json:"seconds,omitempty"`
}
