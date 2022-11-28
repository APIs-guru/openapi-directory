package shared

// ListEmailTemplatesResponse
// The following elements are returned by the service.
type ListEmailTemplatesResponse struct {
	NextToken         *string                 `json:"NextToken,omitempty"`
	TemplatesMetadata []EmailTemplateMetadata `json:"TemplatesMetadata,omitempty"`
}
