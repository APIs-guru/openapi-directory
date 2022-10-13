package shared

type TimeBasedAutoScalingConfiguration struct {
	AutoScalingSchedule *WeeklyAutoScalingSchedule `json:"AutoScalingSchedule"`
	InstanceID          *string                    `json:"InstanceId"`
}
