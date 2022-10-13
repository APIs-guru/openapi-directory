package shared

type TreatmentResource struct {
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration"`
	ID                          string                       `json:"Id"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration"`
	Schedule                    *Schedule                    `json:"Schedule"`
	SizePercent                 int64                        `json:"SizePercent"`
	State                       *CampaignState               `json:"State"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration"`
	TreatmentDescription        *string                      `json:"TreatmentDescription"`
	TreatmentName               *string                      `json:"TreatmentName"`
}
