package shared

type ListLanguageModelsResponse struct {
	Models    []LanguageModel `json:"Models"`
	NextToken *string         `json:"NextToken"`
}
