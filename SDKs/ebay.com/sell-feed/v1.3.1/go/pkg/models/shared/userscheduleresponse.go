package shared

type UserScheduleResponse struct {
	CreationDate               *string `json:"creationDate"`
	FeedType                   *string `json:"feedType"`
	LastModifiedDate           *string `json:"lastModifiedDate"`
	PreferredTriggerDayOfMonth *int32  `json:"preferredTriggerDayOfMonth"`
	PreferredTriggerDayOfWeek  *string `json:"preferredTriggerDayOfWeek"`
	PreferredTriggerHour       *string `json:"preferredTriggerHour"`
	ScheduleEndDate            *string `json:"scheduleEndDate"`
	ScheduleID                 *string `json:"scheduleId"`
	ScheduleName               *string `json:"scheduleName"`
	ScheduleStartDate          *string `json:"scheduleStartDate"`
	ScheduleTemplateID         *string `json:"scheduleTemplateId"`
	SchemaVersion              *string `json:"schemaVersion"`
	Status                     *string `json:"status"`
	StatusReason               *string `json:"statusReason"`
}
