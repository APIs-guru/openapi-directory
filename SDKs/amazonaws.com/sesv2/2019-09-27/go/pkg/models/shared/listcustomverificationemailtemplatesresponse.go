package shared

type ListCustomVerificationEmailTemplatesResponse struct {
	CustomVerificationEmailTemplates []CustomVerificationEmailTemplateMetadata `json:"CustomVerificationEmailTemplates"`
	NextToken                        *string                                   `json:"NextToken"`
}
