package shared

type CanaryScheduleOutput struct {
	DurationInSeconds *int64  `json:"DurationInSeconds,omitempty"`
	Expression        *string `json:"Expression,omitempty"`
}
