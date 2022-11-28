package shared

// SimpleEmail
// Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
type SimpleEmail struct {
	HTMLPart *SimpleEmailPart `json:"HtmlPart,omitempty"`
	Subject  *SimpleEmailPart `json:"Subject,omitempty"`
	TextPart *SimpleEmailPart `json:"TextPart,omitempty"`
}
