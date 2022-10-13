package shared

type UpdateUserScheduleRequest struct {
	PreferredTriggerDayOfMonth *int32  `json:"preferredTriggerDayOfMonth"`
	PreferredTriggerDayOfWeek  *string `json:"preferredTriggerDayOfWeek"`
	PreferredTriggerHour       *string `json:"preferredTriggerHour"`
	ScheduleEndDate            *string `json:"scheduleEndDate"`
	ScheduleName               *string `json:"scheduleName"`
	ScheduleStartDate          *string `json:"scheduleStartDate"`
	SchemaVersion              *string `json:"schemaVersion"`
}
