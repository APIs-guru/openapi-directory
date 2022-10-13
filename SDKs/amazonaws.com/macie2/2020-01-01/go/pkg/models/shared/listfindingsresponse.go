package shared

type ListFindingsResponse struct {
	FindingIds []string `json:"findingIds"`
	NextToken  *string  `json:"nextToken"`
}
