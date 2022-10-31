package shared



type Message struct {
    Content *string `json:"content,omitempty"`
    ContentType MessageContentTypeEnum `json:"contentType"`
    ImageResponseCard *ImageResponseCard `json:"imageResponseCard,omitempty"`
    
}

