package shared

// ApplicationSettingsResource
// Provides information about an application, including the default settings for an application.
type ApplicationSettingsResource struct {
	ApplicationID    string          `json:"ApplicationId"`
	CampaignHook     *CampaignHook   `json:"CampaignHook,omitempty"`
	LastModifiedDate *string         `json:"LastModifiedDate,omitempty"`
	Limits           *CampaignLimits `json:"Limits,omitempty"`
	QuietTime        *QuietTime      `json:"QuietTime,omitempty"`
}
