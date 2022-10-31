package shared



type GetCustomVerificationEmailTemplateResponse struct {
    FailureRedirectionURL *string `json:"FailureRedirectionURL,omitempty"`
    FromEmailAddress *string `json:"FromEmailAddress,omitempty"`
    SuccessRedirectionURL *string `json:"SuccessRedirectionURL,omitempty"`
    TemplateContent *string `json:"TemplateContent,omitempty"`
    TemplateName *string `json:"TemplateName,omitempty"`
    TemplateSubject *string `json:"TemplateSubject,omitempty"`
    
}

