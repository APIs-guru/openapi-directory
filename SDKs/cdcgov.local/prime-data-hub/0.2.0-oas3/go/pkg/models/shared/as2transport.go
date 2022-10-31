package shared



type As2Transport struct {
    ContentDescription *string `json:"contentDescription,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    ReceiverID string `json:"receiverId"`
    ReceiverURL string `json:"receiverUrl"`
    SenderEmail *string `json:"senderEmail,omitempty"`
    SenderID string `json:"senderId"`
    Type string `json:"type"`
    
}

