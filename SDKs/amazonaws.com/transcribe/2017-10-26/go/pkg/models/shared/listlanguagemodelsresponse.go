package shared

type ListLanguageModelsResponse struct {
	Models    []LanguageModel `json:"Models,omitempty"`
	NextToken *string         `json:"NextToken,omitempty"`
}
