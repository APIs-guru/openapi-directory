package operations

type ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute struct {
	Comparison          *string `json:"comparison,omitempty"`
	CustomAttributeName *string `json:"custom_attribute_name,omitempty"`
	Value               *string `json:"value,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd struct {
	CustomAttribute *ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute `json:"custom_attribute,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequestBodyAudience struct {
	And []ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd `json:"AND,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequestBodyRecipients struct {
	CanvasEntryProperties map[string]interface{} `json:"canvas_entry_properties,omitempty"`
	ExternalUserID        *string                `json:"external_user_id,omitempty"`
	TriggerProperties     *string                `json:"trigger_properties,omitempty"`
	UserAlias             *string                `json:"user_alias,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequestBodySchedule struct {
	AtOptimalTime *bool   `json:"at_optimal_time,omitempty"`
	InLocalTime   *bool   `json:"in_local_time,omitempty"`
	Time          *string `json:"time,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequestBody struct {
	Audience              *ScheduleAPITriggeredCanvasesRequestBodyAudience    `json:"audience,omitempty"`
	Broadcast             *bool                                               `json:"broadcast,omitempty"`
	CanvasEntryProperties map[string]interface{}                              `json:"canvas_entry_properties,omitempty"`
	CanvasID              *string                                             `json:"canvas_id,omitempty"`
	Recipients            []ScheduleAPITriggeredCanvasesRequestBodyRecipients `json:"recipients,omitempty"`
	Schedule              *ScheduleAPITriggeredCanvasesRequestBodySchedule    `json:"schedule,omitempty"`
}

type ScheduleAPITriggeredCanvasesRequest struct {
	Request *ScheduleAPITriggeredCanvasesRequestBody `request:"mediaType=application/json"`
}

type ScheduleAPITriggeredCanvasesResponse struct {
	ContentType string
	StatusCode  int64
}
