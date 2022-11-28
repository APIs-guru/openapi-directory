package shared

// TreatmentResource
// Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
type TreatmentResource struct {
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
	ID                          string                       `json:"Id"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration,omitempty"`
	Schedule                    *Schedule                    `json:"Schedule,omitempty"`
	SizePercent                 int64                        `json:"SizePercent"`
	State                       *CampaignState               `json:"State,omitempty"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration,omitempty"`
	TreatmentDescription        *string                      `json:"TreatmentDescription,omitempty"`
	TreatmentName               *string                      `json:"TreatmentName,omitempty"`
}
