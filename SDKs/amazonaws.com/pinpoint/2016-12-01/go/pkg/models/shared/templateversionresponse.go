package shared



type TemplateVersionResponse struct {
    CreationDate string `json:"CreationDate"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    LastModifiedDate string `json:"LastModifiedDate"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    TemplateName string `json:"TemplateName"`
    TemplateType string `json:"TemplateType"`
    Version *string `json:"Version,omitempty"`
    
}

