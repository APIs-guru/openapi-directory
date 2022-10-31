package shared

type SmsMessage struct {
	Body              *string             `json:"Body,omitempty"`
	EntityID          *string             `json:"EntityId,omitempty"`
	Keyword           *string             `json:"Keyword,omitempty"`
	MediaURL          *string             `json:"MediaUrl,omitempty"`
	MessageType       *MessageTypeEnum    `json:"MessageType,omitempty"`
	OriginationNumber *string             `json:"OriginationNumber,omitempty"`
	SenderID          *string             `json:"SenderId,omitempty"`
	Substitutions     map[string][]string `json:"Substitutions,omitempty"`
	TemplateID        *string             `json:"TemplateId,omitempty"`
}
