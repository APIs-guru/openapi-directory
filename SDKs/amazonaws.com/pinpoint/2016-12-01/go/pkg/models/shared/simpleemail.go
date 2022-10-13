package shared

type SimpleEmail struct {
	HTMLPart *SimpleEmailPart `json:"HtmlPart"`
	Subject  *SimpleEmailPart `json:"Subject"`
	TextPart *SimpleEmailPart `json:"TextPart"`
}
