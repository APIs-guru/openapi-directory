package shared

// GetEmailTemplateResponse
// The following element is returned by the service.
type GetEmailTemplateResponse struct {
	TemplateContent EmailTemplateContent `json:"TemplateContent"`
	TemplateName    string               `json:"TemplateName"`
}
