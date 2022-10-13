package shared

type HumanTaskConfig struct {
	AnnotationConsolidationConfig     AnnotationConsolidationConfig `json:"AnnotationConsolidationConfig"`
	MaxConcurrentTaskCount            *int64                        `json:"MaxConcurrentTaskCount"`
	NumberOfHumanWorkersPerDataObject int64                         `json:"NumberOfHumanWorkersPerDataObject"`
	PreHumanTaskLambdaArn             string                        `json:"PreHumanTaskLambdaArn"`
	PublicWorkforceTaskPrice          *PublicWorkforceTaskPrice     `json:"PublicWorkforceTaskPrice"`
	TaskAvailabilityLifetimeInSeconds *int64                        `json:"TaskAvailabilityLifetimeInSeconds"`
	TaskDescription                   string                        `json:"TaskDescription"`
	TaskKeywords                      []string                      `json:"TaskKeywords"`
	TaskTimeLimitInSeconds            int64                         `json:"TaskTimeLimitInSeconds"`
	TaskTitle                         string                        `json:"TaskTitle"`
	UIConfig                          UIConfig                      `json:"UiConfig"`
	WorkteamArn                       string                        `json:"WorkteamArn"`
}
