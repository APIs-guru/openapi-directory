package shared

// TimeBasedAutoScalingConfiguration
// Describes an instance's time-based auto scaling configuration.
type TimeBasedAutoScalingConfiguration struct {
	AutoScalingSchedule *WeeklyAutoScalingSchedule `json:"AutoScalingSchedule,omitempty"`
	InstanceID          *string                    `json:"InstanceId,omitempty"`
}
