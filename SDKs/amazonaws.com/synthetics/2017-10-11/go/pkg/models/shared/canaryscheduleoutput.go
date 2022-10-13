package shared

type CanaryScheduleOutput struct {
	DurationInSeconds *int64  `json:"DurationInSeconds"`
	Expression        *string `json:"Expression"`
}
