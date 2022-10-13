package shared

type ListEmailTemplatesResponse struct {
	NextToken         *string                 `json:"NextToken"`
	TemplatesMetadata []EmailTemplateMetadata `json:"TemplatesMetadata"`
}
