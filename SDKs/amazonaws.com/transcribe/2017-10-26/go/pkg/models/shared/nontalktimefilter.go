package shared

type NonTalkTimeFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange `json:"AbsoluteTimeRange,omitempty"`
	Negate            *bool              `json:"Negate,omitempty"`
	RelativeTimeRange *RelativeTimeRange `json:"RelativeTimeRange,omitempty"`
	Threshold         *int64             `json:"Threshold,omitempty"`
}
