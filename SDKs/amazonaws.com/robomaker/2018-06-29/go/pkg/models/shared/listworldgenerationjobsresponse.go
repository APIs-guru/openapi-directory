package shared

type ListWorldGenerationJobsResponse struct {
	NextToken                   *string                     `json:"nextToken"`
	WorldGenerationJobSummaries []WorldGenerationJobSummary `json:"worldGenerationJobSummaries"`
}
