package shared

// Message
// Container for text that is returned to the customer..
type Message struct {
	Content           *string                `json:"content,omitempty"`
	ContentType       MessageContentTypeEnum `json:"contentType"`
	ImageResponseCard *ImageResponseCard     `json:"imageResponseCard,omitempty"`
}
