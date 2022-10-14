package shared

type ListFindingsResponse struct {
	FindingIds []string `json:"findingIds,omitempty"`
	NextToken  *string  `json:"nextToken,omitempty"`
}
