package shared



type ApplicationSettingsResource struct {
    ApplicationID string `json:"ApplicationId"`
    CampaignHook *CampaignHook `json:"CampaignHook,omitempty"`
    LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
    Limits *CampaignLimits `json:"Limits,omitempty"`
    QuietTime *QuietTime `json:"QuietTime,omitempty"`
    
}

