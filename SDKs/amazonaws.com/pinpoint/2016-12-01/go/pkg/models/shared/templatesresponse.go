package shared

type TemplatesResponse struct {
	Item      []TemplateResponse `json:"Item"`
	NextToken *string            `json:"NextToken"`
}
