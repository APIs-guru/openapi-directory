package shared

// Message
// The message object that provides the message text and its type.
type Message struct {
	Content     string          `json:"content"`
	ContentType ContentTypeEnum `json:"contentType"`
	GroupNumber *int64          `json:"groupNumber,omitempty"`
}
