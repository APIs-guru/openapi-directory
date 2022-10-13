package shared

type SetTimeBasedAutoScalingRequest struct {
	AutoScalingSchedule *WeeklyAutoScalingSchedule `json:"AutoScalingSchedule"`
	InstanceID          string                     `json:"InstanceId"`
}
