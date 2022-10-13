package shared

type ListWorldsResponse struct {
	NextToken      *string        `json:"nextToken"`
	WorldSummaries []WorldSummary `json:"worldSummaries"`
}
