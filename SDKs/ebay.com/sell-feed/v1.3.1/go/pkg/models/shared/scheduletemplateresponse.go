package shared

type ScheduleTemplateResponse struct {
	FeedType                *string                  `json:"feedType"`
	Frequency               *string                  `json:"frequency"`
	Name                    *string                  `json:"name"`
	ScheduleTemplateID      *string                  `json:"scheduleTemplateId"`
	Status                  *string                  `json:"status"`
	SupportedConfigurations []SupportedConfiguration `json:"supportedConfigurations"`
}
