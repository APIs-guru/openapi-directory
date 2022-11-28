package shared

// CanaryScheduleOutput
// How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
type CanaryScheduleOutput struct {
	DurationInSeconds *int64  `json:"DurationInSeconds,omitempty"`
	Expression        *string `json:"Expression,omitempty"`
}
