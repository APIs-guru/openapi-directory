package shared

type ScheduleTemplateCollection struct {
	Href              *string                    `json:"href"`
	Limit             *int32                     `json:"limit"`
	Next              *string                    `json:"next"`
	Offset            *int32                     `json:"offset"`
	Prev              *string                    `json:"prev"`
	ScheduleTemplates []ScheduleTemplateResponse `json:"scheduleTemplates"`
	Total             *int32                     `json:"total"`
}
