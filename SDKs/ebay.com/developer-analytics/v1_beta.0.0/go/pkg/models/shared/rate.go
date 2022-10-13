package shared

type Rate struct {
	Limit      *int32  `json:"limit"`
	Remaining  *int32  `json:"remaining"`
	Reset      *string `json:"reset"`
	TimeWindow *int32  `json:"timeWindow"`
}
