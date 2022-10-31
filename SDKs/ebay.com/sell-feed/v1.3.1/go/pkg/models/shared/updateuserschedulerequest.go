package shared



type UpdateUserScheduleRequest struct {
    PreferredTriggerDayOfMonth *int32 `json:"preferredTriggerDayOfMonth,omitempty"`
    PreferredTriggerDayOfWeek *string `json:"preferredTriggerDayOfWeek,omitempty"`
    PreferredTriggerHour *string `json:"preferredTriggerHour,omitempty"`
    ScheduleEndDate *string `json:"scheduleEndDate,omitempty"`
    ScheduleName *string `json:"scheduleName,omitempty"`
    ScheduleStartDate *string `json:"scheduleStartDate,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    
}

