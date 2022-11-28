package shared

// Rate
// This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
type Rate struct {
	Limit      *int32  `json:"limit,omitempty"`
	Remaining  *int32  `json:"remaining,omitempty"`
	Reset      *string `json:"reset,omitempty"`
	TimeWindow *int32  `json:"timeWindow,omitempty"`
}
