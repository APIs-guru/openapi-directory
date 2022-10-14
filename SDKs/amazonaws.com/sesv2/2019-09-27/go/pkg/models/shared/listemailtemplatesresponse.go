package shared

type ListEmailTemplatesResponse struct {
	NextToken         *string                 `json:"NextToken,omitempty"`
	TemplatesMetadata []EmailTemplateMetadata `json:"TemplatesMetadata,omitempty"`
}
