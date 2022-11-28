package shared

// CampaignResponse
// Provides information about the status, configuration, and other settings for a campaign.
type CampaignResponse struct {
	AdditionalTreatments        []TreatmentResource          `json:"AdditionalTreatments,omitempty"`
	ApplicationID               string                       `json:"ApplicationId"`
	Arn                         string                       `json:"Arn"`
	CreationDate                string                       `json:"CreationDate"`
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
	DefaultState                *CampaignState               `json:"DefaultState,omitempty"`
	Description                 *string                      `json:"Description,omitempty"`
	HoldoutPercent              *int64                       `json:"HoldoutPercent,omitempty"`
	Hook                        *CampaignHook                `json:"Hook,omitempty"`
	ID                          string                       `json:"Id"`
	IsPaused                    *bool                        `json:"IsPaused,omitempty"`
	LastModifiedDate            string                       `json:"LastModifiedDate"`
	Limits                      *CampaignLimits              `json:"Limits,omitempty"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration,omitempty"`
	Name                        *string                      `json:"Name,omitempty"`
	Priority                    *int64                       `json:"Priority,omitempty"`
	Schedule                    *Schedule                    `json:"Schedule,omitempty"`
	SegmentID                   string                       `json:"SegmentId"`
	SegmentVersion              int64                        `json:"SegmentVersion"`
	State                       *CampaignState               `json:"State,omitempty"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration,omitempty"`
	TreatmentDescription        *string                      `json:"TreatmentDescription,omitempty"`
	TreatmentName               *string                      `json:"TreatmentName,omitempty"`
	Version                     *int64                       `json:"Version,omitempty"`
	Tags                        map[string]string            `json:"tags,omitempty"`
}
