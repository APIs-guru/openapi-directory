package shared

type ListSolutionVersionsResponse struct {
	NextToken        *string                  `json:"nextToken"`
	SolutionVersions []SolutionVersionSummary `json:"solutionVersions"`
}
