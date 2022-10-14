package shared

type ScheduleTemplateResponse struct {
	FeedType                *string                  `json:"feedType,omitempty"`
	Frequency               *string                  `json:"frequency,omitempty"`
	Name                    *string                  `json:"name,omitempty"`
	ScheduleTemplateID      *string                  `json:"scheduleTemplateId,omitempty"`
	Status                  *string                  `json:"status,omitempty"`
	SupportedConfigurations []SupportedConfiguration `json:"supportedConfigurations,omitempty"`
}
