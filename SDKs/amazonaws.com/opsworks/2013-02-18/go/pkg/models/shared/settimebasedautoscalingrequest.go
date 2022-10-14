package shared

type SetTimeBasedAutoScalingRequest struct {
	AutoScalingSchedule *WeeklyAutoScalingSchedule `json:"AutoScalingSchedule,omitempty"`
	InstanceID          string                     `json:"InstanceId"`
}
