package shared

type JourneySmsMessage struct {
	EntityID          *string          `json:"EntityId,omitempty"`
	MessageType       *MessageTypeEnum `json:"MessageType,omitempty"`
	OriginationNumber *string          `json:"OriginationNumber,omitempty"`
	SenderID          *string          `json:"SenderId,omitempty"`
	TemplateID        *string          `json:"TemplateId,omitempty"`
}
