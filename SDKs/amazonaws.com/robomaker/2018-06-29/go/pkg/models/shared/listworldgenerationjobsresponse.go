package shared

type ListWorldGenerationJobsResponse struct {
	NextToken                   *string                     `json:"nextToken,omitempty"`
	WorldGenerationJobSummaries []WorldGenerationJobSummary `json:"worldGenerationJobSummaries"`
}
