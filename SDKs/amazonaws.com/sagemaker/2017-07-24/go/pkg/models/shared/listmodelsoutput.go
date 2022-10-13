package shared

type ListModelsOutput struct {
	Models    []ModelSummary `json:"Models"`
	NextToken *string        `json:"NextToken"`
}
