package shared

type ListSolutionsResponse struct {
	NextToken *string           `json:"nextToken"`
	Solutions []SolutionSummary `json:"solutions"`
}
