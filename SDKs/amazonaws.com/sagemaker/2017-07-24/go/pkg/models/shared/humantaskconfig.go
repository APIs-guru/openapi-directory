package shared



type HumanTaskConfig struct {
    AnnotationConsolidationConfig AnnotationConsolidationConfig `json:"AnnotationConsolidationConfig"`
    MaxConcurrentTaskCount *int64 `json:"MaxConcurrentTaskCount,omitempty"`
    NumberOfHumanWorkersPerDataObject int64 `json:"NumberOfHumanWorkersPerDataObject"`
    PreHumanTaskLambdaArn string `json:"PreHumanTaskLambdaArn"`
    PublicWorkforceTaskPrice *PublicWorkforceTaskPrice `json:"PublicWorkforceTaskPrice,omitempty"`
    TaskAvailabilityLifetimeInSeconds *int64 `json:"TaskAvailabilityLifetimeInSeconds,omitempty"`
    TaskDescription string `json:"TaskDescription"`
    TaskKeywords []string `json:"TaskKeywords,omitempty"`
    TaskTimeLimitInSeconds int64 `json:"TaskTimeLimitInSeconds"`
    TaskTitle string `json:"TaskTitle"`
    UIConfig UIConfig `json:"UiConfig"`
    WorkteamArn string `json:"WorkteamArn"`
    
}

