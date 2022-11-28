package shared

// TimeInterval
// An interval of time, with an absolute start and end.
type TimeInterval struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
