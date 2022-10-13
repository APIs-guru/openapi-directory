package shared

type TimerScript struct {
	Arg      *string `json:"arg"`
	Interval *int32  `json:"interval"`
	Script   *string `json:"script"`
}
