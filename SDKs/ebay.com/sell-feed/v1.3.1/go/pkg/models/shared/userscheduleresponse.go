package shared



type UserScheduleResponse struct {
    CreationDate *string `json:"creationDate,omitempty"`
    FeedType *string `json:"feedType,omitempty"`
    LastModifiedDate *string `json:"lastModifiedDate,omitempty"`
    PreferredTriggerDayOfMonth *int32 `json:"preferredTriggerDayOfMonth,omitempty"`
    PreferredTriggerDayOfWeek *string `json:"preferredTriggerDayOfWeek,omitempty"`
    PreferredTriggerHour *string `json:"preferredTriggerHour,omitempty"`
    ScheduleEndDate *string `json:"scheduleEndDate,omitempty"`
    ScheduleID *string `json:"scheduleId,omitempty"`
    ScheduleName *string `json:"scheduleName,omitempty"`
    ScheduleStartDate *string `json:"scheduleStartDate,omitempty"`
    ScheduleTemplateID *string `json:"scheduleTemplateId,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    Status *string `json:"status,omitempty"`
    StatusReason *string `json:"statusReason,omitempty"`
    
}

