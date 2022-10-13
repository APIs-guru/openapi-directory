package shared

type ListSolutionVersionsRequest struct {
	MaxResults  *int64  `json:"maxResults"`
	NextToken   *string `json:"nextToken"`
	SolutionArn *string `json:"solutionArn"`
}
