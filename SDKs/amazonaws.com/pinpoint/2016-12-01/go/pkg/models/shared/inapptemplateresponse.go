package shared



type InAppTemplateResponse struct {
    Arn *string `json:"Arn,omitempty"`
    Content []InAppMessageContent `json:"Content,omitempty"`
    CreationDate string `json:"CreationDate"`
    CustomConfig map[string]string `json:"CustomConfig,omitempty"`
    LastModifiedDate string `json:"LastModifiedDate"`
    Layout *LayoutEnum `json:"Layout,omitempty"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    TemplateName string `json:"TemplateName"`
    TemplateType TemplateTypeEnum `json:"TemplateType"`
    Version *string `json:"Version,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

