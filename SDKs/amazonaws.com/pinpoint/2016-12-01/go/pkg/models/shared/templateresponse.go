package shared



type TemplateResponse struct {
    Arn *string `json:"Arn,omitempty"`
    CreationDate string `json:"CreationDate"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    LastModifiedDate string `json:"LastModifiedDate"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    TemplateName string `json:"TemplateName"`
    TemplateType TemplateTypeEnum `json:"TemplateType"`
    Version *string `json:"Version,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

