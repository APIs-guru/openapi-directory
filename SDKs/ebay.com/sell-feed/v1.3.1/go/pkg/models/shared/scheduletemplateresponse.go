package shared

// ScheduleTemplateResponse
// The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
type ScheduleTemplateResponse struct {
	FeedType                *string                  `json:"feedType,omitempty"`
	Frequency               *string                  `json:"frequency,omitempty"`
	Name                    *string                  `json:"name,omitempty"`
	ScheduleTemplateID      *string                  `json:"scheduleTemplateId,omitempty"`
	Status                  *string                  `json:"status,omitempty"`
	SupportedConfigurations []SupportedConfiguration `json:"supportedConfigurations,omitempty"`
}
