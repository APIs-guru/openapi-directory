package shared

// EmailTemplateContent
// The content of the email, composed of a subject line, an HTML part, and a text-only part.
type EmailTemplateContent struct {
	HTML    *string `json:"Html,omitempty"`
	Subject *string `json:"Subject,omitempty"`
	Text    *string `json:"Text,omitempty"`
}
