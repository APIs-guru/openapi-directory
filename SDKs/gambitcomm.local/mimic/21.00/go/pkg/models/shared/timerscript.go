package shared

type TimerScript struct {
	Arg      *string `json:"arg,omitempty"`
	Interval *int32  `json:"interval,omitempty"`
	Script   *string `json:"script,omitempty"`
}
