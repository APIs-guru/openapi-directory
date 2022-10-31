package shared

type TimeSegment struct {
	EndTimeOffset   *string `json:"endTimeOffset,omitempty"`
	StartTimeOffset *string `json:"startTimeOffset,omitempty"`
}
