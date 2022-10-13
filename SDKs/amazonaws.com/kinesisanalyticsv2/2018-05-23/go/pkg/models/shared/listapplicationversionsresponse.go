package shared

type ListApplicationVersionsResponse struct {
	ApplicationVersionSummaries []ApplicationVersionSummary `json:"ApplicationVersionSummaries"`
	NextToken                   *string                     `json:"NextToken"`
}
