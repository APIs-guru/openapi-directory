package shared

type TemplateVersionsResponse struct {
	Item      []TemplateVersionResponse `json:"Item"`
	Message   *string                   `json:"Message"`
	NextToken *string                   `json:"NextToken"`
	RequestID *string                   `json:"RequestID"`
}
