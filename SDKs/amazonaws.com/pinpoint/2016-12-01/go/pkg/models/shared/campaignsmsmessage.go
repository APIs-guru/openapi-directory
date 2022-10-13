package shared

type CampaignSmsMessage struct {
	Body              *string          `json:"Body"`
	EntityID          *string          `json:"EntityId"`
	MessageType       *MessageTypeEnum `json:"MessageType"`
	OriginationNumber *string          `json:"OriginationNumber"`
	SenderID          *string          `json:"SenderId"`
	TemplateID        *string          `json:"TemplateId"`
}
