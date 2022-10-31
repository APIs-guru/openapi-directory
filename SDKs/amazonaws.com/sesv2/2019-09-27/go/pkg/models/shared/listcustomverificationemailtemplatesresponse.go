package shared



type ListCustomVerificationEmailTemplatesResponse struct {
    CustomVerificationEmailTemplates []CustomVerificationEmailTemplateMetadata `json:"CustomVerificationEmailTemplates,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

