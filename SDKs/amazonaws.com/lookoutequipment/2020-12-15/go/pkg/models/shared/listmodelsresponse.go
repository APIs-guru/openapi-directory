package shared

type ListModelsResponse struct {
	ModelSummaries []ModelSummary `json:"ModelSummaries,omitempty"`
	NextToken      *string        `json:"NextToken,omitempty"`
}
