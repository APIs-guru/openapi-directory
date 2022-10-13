package shared

type StatisticSet struct {
	Maximum     *float64 `json:"Maximum"`
	Minimum     *float64 `json:"Minimum"`
	SampleCount *int64   `json:"SampleCount"`
	Sum         *float64 `json:"Sum"`
}
