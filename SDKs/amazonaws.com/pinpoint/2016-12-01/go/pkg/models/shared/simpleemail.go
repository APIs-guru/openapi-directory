package shared

type SimpleEmail struct {
	HTMLPart *SimpleEmailPart `json:"HtmlPart,omitempty"`
	Subject  *SimpleEmailPart `json:"Subject,omitempty"`
	TextPart *SimpleEmailPart `json:"TextPart,omitempty"`
}
