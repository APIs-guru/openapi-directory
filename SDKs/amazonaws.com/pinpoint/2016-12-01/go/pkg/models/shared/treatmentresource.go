package shared



type TreatmentResource struct {
    CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
    ID string `json:"Id"`
    MessageConfiguration *MessageConfiguration `json:"MessageConfiguration,omitempty"`
    Schedule *Schedule `json:"Schedule,omitempty"`
    SizePercent int64 `json:"SizePercent"`
    State *CampaignState `json:"State,omitempty"`
    TemplateConfiguration *TemplateConfiguration `json:"TemplateConfiguration,omitempty"`
    TreatmentDescription *string `json:"TreatmentDescription,omitempty"`
    TreatmentName *string `json:"TreatmentName,omitempty"`
    
}

