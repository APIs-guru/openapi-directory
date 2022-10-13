package shared

type GetCustomVerificationEmailTemplateResponse struct {
	FailureRedirectionURL *string `json:"FailureRedirectionURL"`
	FromEmailAddress      *string `json:"FromEmailAddress"`
	SuccessRedirectionURL *string `json:"SuccessRedirectionURL"`
	TemplateContent       *string `json:"TemplateContent"`
	TemplateName          *string `json:"TemplateName"`
	TemplateSubject       *string `json:"TemplateSubject"`
}
