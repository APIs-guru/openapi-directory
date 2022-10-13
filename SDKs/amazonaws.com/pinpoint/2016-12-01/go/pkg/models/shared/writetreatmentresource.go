package shared

type WriteTreatmentResource struct {
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration"`
	Schedule                    *Schedule                    `json:"Schedule"`
	SizePercent                 int64                        `json:"SizePercent"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration"`
	TreatmentDescription        *string                      `json:"TreatmentDescription"`
	TreatmentName               *string                      `json:"TreatmentName"`
}
