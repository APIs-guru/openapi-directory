package shared



type GetEmailTemplateResponse struct {
    TemplateContent EmailTemplateContent `json:"TemplateContent"`
    TemplateName string `json:"TemplateName"`
    
}

