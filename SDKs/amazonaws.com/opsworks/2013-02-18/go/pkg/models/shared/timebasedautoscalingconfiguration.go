package shared

type TimeBasedAutoScalingConfiguration struct {
	AutoScalingSchedule *WeeklyAutoScalingSchedule `json:"AutoScalingSchedule,omitempty"`
	InstanceID          *string                    `json:"InstanceId,omitempty"`
}
