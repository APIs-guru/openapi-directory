package operations

type ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute struct {
	Comparison          *string `json:"comparison"`
	CustomAttributeName *string `json:"custom_attribute_name"`
	Value               *string `json:"value"`
}

type ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd struct {
	CustomAttribute *ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute `json:"custom_attribute"`
}

type ScheduleAPITriggeredCanvasesRequestBodyAudience struct {
	And []ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd `json:"AND"`
}

type ScheduleAPITriggeredCanvasesRequestBodyRecipients struct {
	CanvasEntryProperties map[string]interface{} `json:"canvas_entry_properties"`
	ExternalUserID        *string                `json:"external_user_id"`
	TriggerProperties     *string                `json:"trigger_properties"`
	UserAlias             *string                `json:"user_alias"`
}

type ScheduleAPITriggeredCanvasesRequestBodySchedule struct {
	AtOptimalTime *bool   `json:"at_optimal_time"`
	InLocalTime   *bool   `json:"in_local_time"`
	Time          *string `json:"time"`
}

type ScheduleAPITriggeredCanvasesRequestBody struct {
	Audience              *ScheduleAPITriggeredCanvasesRequestBodyAudience    `json:"audience"`
	Broadcast             *bool                                               `json:"broadcast"`
	CanvasEntryProperties map[string]interface{}                              `json:"canvas_entry_properties"`
	CanvasID              *string                                             `json:"canvas_id"`
	Recipients            []ScheduleAPITriggeredCanvasesRequestBodyRecipients `json:"recipients"`
	Schedule              *ScheduleAPITriggeredCanvasesRequestBodySchedule    `json:"schedule"`
}

type ScheduleAPITriggeredCanvasesRequest struct {
	Request *ScheduleAPITriggeredCanvasesRequestBody `request:"mediaType=application/json"`
}

type ScheduleAPITriggeredCanvasesResponse struct {
	ContentType string
	StatusCode  int64
}
