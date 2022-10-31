package shared



type CampaignSmsMessage struct {
    Body *string `json:"Body,omitempty"`
    EntityID *string `json:"EntityId,omitempty"`
    MessageType *MessageTypeEnum `json:"MessageType,omitempty"`
    OriginationNumber *string `json:"OriginationNumber,omitempty"`
    SenderID *string `json:"SenderId,omitempty"`
    TemplateID *string `json:"TemplateId,omitempty"`
    
}

