package shared

// UserScheduleResponse
// The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
type UserScheduleResponse struct {
	CreationDate               *string `json:"creationDate,omitempty"`
	FeedType                   *string `json:"feedType,omitempty"`
	LastModifiedDate           *string `json:"lastModifiedDate,omitempty"`
	PreferredTriggerDayOfMonth *int32  `json:"preferredTriggerDayOfMonth,omitempty"`
	PreferredTriggerDayOfWeek  *string `json:"preferredTriggerDayOfWeek,omitempty"`
	PreferredTriggerHour       *string `json:"preferredTriggerHour,omitempty"`
	ScheduleEndDate            *string `json:"scheduleEndDate,omitempty"`
	ScheduleID                 *string `json:"scheduleId,omitempty"`
	ScheduleName               *string `json:"scheduleName,omitempty"`
	ScheduleStartDate          *string `json:"scheduleStartDate,omitempty"`
	ScheduleTemplateID         *string `json:"scheduleTemplateId,omitempty"`
	SchemaVersion              *string `json:"schemaVersion,omitempty"`
	Status                     *string `json:"status,omitempty"`
	StatusReason               *string `json:"statusReason,omitempty"`
}
