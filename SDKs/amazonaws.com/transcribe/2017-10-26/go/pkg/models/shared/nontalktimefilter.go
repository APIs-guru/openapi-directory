package shared

// NonTalkTimeFilter
// An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
type NonTalkTimeFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange `json:"AbsoluteTimeRange,omitempty"`
	Negate            *bool              `json:"Negate,omitempty"`
	RelativeTimeRange *RelativeTimeRange `json:"RelativeTimeRange,omitempty"`
	Threshold         *int64             `json:"Threshold,omitempty"`
}
