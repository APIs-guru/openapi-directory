package shared

// Content
// An object that represents the content of the email, and optionally a character set specification.
type Content struct {
	Charset *string `json:"Charset,omitempty"`
	Data    string  `json:"Data"`
}
