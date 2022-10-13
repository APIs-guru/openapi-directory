package shared

type HumanLoopConfig struct {
	HumanTaskUIArn                    string                    `json:"HumanTaskUiArn"`
	PublicWorkforceTaskPrice          *PublicWorkforceTaskPrice `json:"PublicWorkforceTaskPrice"`
	TaskAvailabilityLifetimeInSeconds *int64                    `json:"TaskAvailabilityLifetimeInSeconds"`
	TaskCount                         int64                     `json:"TaskCount"`
	TaskDescription                   string                    `json:"TaskDescription"`
	TaskKeywords                      []string                  `json:"TaskKeywords"`
	TaskTimeLimitInSeconds            *int64                    `json:"TaskTimeLimitInSeconds"`
	TaskTitle                         string                    `json:"TaskTitle"`
	WorkteamArn                       string                    `json:"WorkteamArn"`
}
