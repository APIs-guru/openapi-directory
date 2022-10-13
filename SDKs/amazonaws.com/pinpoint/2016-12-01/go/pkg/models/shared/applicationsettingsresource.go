package shared

type ApplicationSettingsResource struct {
	ApplicationID    string          `json:"ApplicationId"`
	CampaignHook     *CampaignHook   `json:"CampaignHook"`
	LastModifiedDate *string         `json:"LastModifiedDate"`
	Limits           *CampaignLimits `json:"Limits"`
	QuietTime        *QuietTime      `json:"QuietTime"`
}
