package shared

type TemplateVersionsResponse struct {
	Item      []TemplateVersionResponse `json:"Item"`
	Message   *string                   `json:"Message,omitempty"`
	NextToken *string                   `json:"NextToken,omitempty"`
	RequestID *string                   `json:"RequestID,omitempty"`
}
