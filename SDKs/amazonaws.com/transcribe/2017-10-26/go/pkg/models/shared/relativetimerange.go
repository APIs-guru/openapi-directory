package shared

type RelativeTimeRange struct {
	EndPercentage   *int64 `json:"EndPercentage,omitempty"`
	First           *int64 `json:"First,omitempty"`
	Last            *int64 `json:"Last,omitempty"`
	StartPercentage *int64 `json:"StartPercentage,omitempty"`
}
