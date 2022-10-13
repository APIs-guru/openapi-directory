package shared

type SmsMessage struct {
	Body              *string             `json:"Body"`
	EntityID          *string             `json:"EntityId"`
	Keyword           *string             `json:"Keyword"`
	MediaURL          *string             `json:"MediaUrl"`
	MessageType       *MessageTypeEnum    `json:"MessageType"`
	OriginationNumber *string             `json:"OriginationNumber"`
	SenderID          *string             `json:"SenderId"`
	Substitutions     map[string][]string `json:"Substitutions"`
	TemplateID        *string             `json:"TemplateId"`
}
