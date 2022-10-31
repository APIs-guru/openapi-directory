package shared



type Message struct {
    CustomPayload *CustomPayload `json:"customPayload,omitempty"`
    ImageResponseCard *ImageResponseCard `json:"imageResponseCard,omitempty"`
    PlainTextMessage *PlainTextMessage `json:"plainTextMessage,omitempty"`
    SsmlMessage *SsmlMessage `json:"ssmlMessage,omitempty"`
    
}

