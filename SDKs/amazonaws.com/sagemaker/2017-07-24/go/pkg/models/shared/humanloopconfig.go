package shared



type HumanLoopConfig struct {
    HumanTaskUIArn string `json:"HumanTaskUiArn"`
    PublicWorkforceTaskPrice *PublicWorkforceTaskPrice `json:"PublicWorkforceTaskPrice,omitempty"`
    TaskAvailabilityLifetimeInSeconds *int64 `json:"TaskAvailabilityLifetimeInSeconds,omitempty"`
    TaskCount int64 `json:"TaskCount"`
    TaskDescription string `json:"TaskDescription"`
    TaskKeywords []string `json:"TaskKeywords,omitempty"`
    TaskTimeLimitInSeconds *int64 `json:"TaskTimeLimitInSeconds,omitempty"`
    TaskTitle string `json:"TaskTitle"`
    WorkteamArn string `json:"WorkteamArn"`
    
}

