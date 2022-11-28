package shared

// ListCustomVerificationEmailTemplatesResponse
// The following elements are returned by the service.
type ListCustomVerificationEmailTemplatesResponse struct {
	CustomVerificationEmailTemplates []CustomVerificationEmailTemplateMetadata `json:"CustomVerificationEmailTemplates,omitempty"`
	NextToken                        *string                                   `json:"NextToken,omitempty"`
}
