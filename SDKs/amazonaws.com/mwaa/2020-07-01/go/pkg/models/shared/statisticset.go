package shared

type StatisticSet struct {
	Maximum     *float64 `json:"Maximum,omitempty"`
	Minimum     *float64 `json:"Minimum,omitempty"`
	SampleCount *int64   `json:"SampleCount,omitempty"`
	Sum         *float64 `json:"Sum,omitempty"`
}
