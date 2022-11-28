package shared

// TimeRange
// A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
type TimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
