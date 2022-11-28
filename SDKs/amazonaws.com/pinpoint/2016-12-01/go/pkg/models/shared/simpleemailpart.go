package shared

// SimpleEmailPart
// Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
type SimpleEmailPart struct {
	Charset *string `json:"Charset,omitempty"`
	Data    *string `json:"Data,omitempty"`
}
