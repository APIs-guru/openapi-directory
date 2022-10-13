package shared

type ListModelsResponse struct {
	ModelSummaries []ModelSummary `json:"ModelSummaries"`
	NextToken      *string        `json:"NextToken"`
}
