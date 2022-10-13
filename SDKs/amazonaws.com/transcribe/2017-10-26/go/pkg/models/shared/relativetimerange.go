package shared

type RelativeTimeRange struct {
	EndPercentage   *int64 `json:"EndPercentage"`
	First           *int64 `json:"First"`
	Last            *int64 `json:"Last"`
	StartPercentage *int64 `json:"StartPercentage"`
}
