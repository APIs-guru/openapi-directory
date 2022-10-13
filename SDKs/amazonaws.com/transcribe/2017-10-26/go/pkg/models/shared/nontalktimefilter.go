package shared

type NonTalkTimeFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange `json:"AbsoluteTimeRange"`
	Negate            *bool              `json:"Negate"`
	RelativeTimeRange *RelativeTimeRange `json:"RelativeTimeRange"`
	Threshold         *int64             `json:"Threshold"`
}
