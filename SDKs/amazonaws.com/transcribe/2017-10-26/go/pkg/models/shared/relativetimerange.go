package shared

// RelativeTimeRange
// An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls.
type RelativeTimeRange struct {
	EndPercentage   *int64 `json:"EndPercentage,omitempty"`
	First           *int64 `json:"First,omitempty"`
	Last            *int64 `json:"Last,omitempty"`
	StartPercentage *int64 `json:"StartPercentage,omitempty"`
}
