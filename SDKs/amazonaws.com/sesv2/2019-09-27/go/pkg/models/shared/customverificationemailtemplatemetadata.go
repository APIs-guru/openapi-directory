package shared

// CustomVerificationEmailTemplateMetadata
// Contains information about a custom verification email template.
type CustomVerificationEmailTemplateMetadata struct {
	FailureRedirectionURL *string `json:"FailureRedirectionURL,omitempty"`
	FromEmailAddress      *string `json:"FromEmailAddress,omitempty"`
	SuccessRedirectionURL *string `json:"SuccessRedirectionURL,omitempty"`
	TemplateName          *string `json:"TemplateName,omitempty"`
	TemplateSubject       *string `json:"TemplateSubject,omitempty"`
}
