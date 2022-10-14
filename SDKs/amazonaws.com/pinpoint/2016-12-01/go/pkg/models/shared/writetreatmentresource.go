package shared

type WriteTreatmentResource struct {
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration,omitempty"`
	Schedule                    *Schedule                    `json:"Schedule,omitempty"`
	SizePercent                 int64                        `json:"SizePercent"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration,omitempty"`
	TreatmentDescription        *string                      `json:"TreatmentDescription,omitempty"`
	TreatmentName               *string                      `json:"TreatmentName,omitempty"`
}
