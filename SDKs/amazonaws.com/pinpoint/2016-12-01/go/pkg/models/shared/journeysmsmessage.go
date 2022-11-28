package shared

// JourneySmsMessage
// Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
type JourneySmsMessage struct {
	EntityID          *string          `json:"EntityId,omitempty"`
	MessageType       *MessageTypeEnum `json:"MessageType,omitempty"`
	OriginationNumber *string          `json:"OriginationNumber,omitempty"`
	SenderID          *string          `json:"SenderId,omitempty"`
	TemplateID        *string          `json:"TemplateId,omitempty"`
}
