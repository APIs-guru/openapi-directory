package shared

type As2Transport struct {
	ContentDescription *string `json:"contentDescription"`
	MimeType           *string `json:"mimeType"`
	ReceiverID         string  `json:"receiverId"`
	ReceiverURL        string  `json:"receiverUrl"`
	SenderEmail        *string `json:"senderEmail"`
	SenderID           string  `json:"senderId"`
	Type               string  `json:"type"`
}
