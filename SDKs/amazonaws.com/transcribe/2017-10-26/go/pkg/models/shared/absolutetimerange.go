package shared

// AbsoluteTimeRange
// A time range, set in seconds, between two points in the call.
type AbsoluteTimeRange struct {
	EndTime   *int64 `json:"EndTime,omitempty"`
	First     *int64 `json:"First,omitempty"`
	Last      *int64 `json:"Last,omitempty"`
	StartTime *int64 `json:"StartTime,omitempty"`
}
