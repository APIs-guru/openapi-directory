package shared

type CustomVerificationEmailTemplateMetadata struct {
	FailureRedirectionURL *string `json:"FailureRedirectionURL"`
	FromEmailAddress      *string `json:"FromEmailAddress"`
	SuccessRedirectionURL *string `json:"SuccessRedirectionURL"`
	TemplateName          *string `json:"TemplateName"`
	TemplateSubject       *string `json:"TemplateSubject"`
}
