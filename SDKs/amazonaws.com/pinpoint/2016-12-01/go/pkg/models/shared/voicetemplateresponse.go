package shared



type VoiceTemplateResponse struct {
    Arn *string `json:"Arn,omitempty"`
    Body *string `json:"Body,omitempty"`
    CreationDate string `json:"CreationDate"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    LanguageCode *string `json:"LanguageCode,omitempty"`
    LastModifiedDate string `json:"LastModifiedDate"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    TemplateName string `json:"TemplateName"`
    TemplateType TemplateTypeEnum `json:"TemplateType"`
    Version *string `json:"Version,omitempty"`
    VoiceID *string `json:"VoiceId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

