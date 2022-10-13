package shared

type JourneySmsMessage struct {
	EntityID          *string          `json:"EntityId"`
	MessageType       *MessageTypeEnum `json:"MessageType"`
	OriginationNumber *string          `json:"OriginationNumber"`
	SenderID          *string          `json:"SenderId"`
	TemplateID        *string          `json:"TemplateId"`
}
