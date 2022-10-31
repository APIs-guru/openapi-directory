package shared



type SmsTemplateResponse struct {
    Arn *string `json:"Arn,omitempty"`
    Body *string `json:"Body,omitempty"`
    CreationDate string `json:"CreationDate"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    LastModifiedDate string `json:"LastModifiedDate"`
    RecommenderID *string `json:"RecommenderId,omitempty"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    TemplateName string `json:"TemplateName"`
    TemplateType TemplateTypeEnum `json:"TemplateType"`
    Version *string `json:"Version,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

