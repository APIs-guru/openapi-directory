package shared

// Body
// Represents the body of the email message.
type Body struct {
	HTML *Content `json:"Html,omitempty"`
	Text *Content `json:"Text,omitempty"`
}
