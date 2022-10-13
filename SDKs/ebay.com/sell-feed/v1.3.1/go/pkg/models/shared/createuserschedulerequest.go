package shared

type CreateUserScheduleRequest struct {
	FeedType                   *string `json:"feedType"`
	PreferredTriggerDayOfMonth *int32  `json:"preferredTriggerDayOfMonth"`
	PreferredTriggerDayOfWeek  *string `json:"preferredTriggerDayOfWeek"`
	PreferredTriggerHour       *string `json:"preferredTriggerHour"`
	ScheduleEndDate            *string `json:"scheduleEndDate"`
	ScheduleName               *string `json:"scheduleName"`
	ScheduleStartDate          *string `json:"scheduleStartDate"`
	ScheduleTemplateID         *string `json:"scheduleTemplateId"`
	SchemaVersion              *string `json:"schemaVersion"`
}
