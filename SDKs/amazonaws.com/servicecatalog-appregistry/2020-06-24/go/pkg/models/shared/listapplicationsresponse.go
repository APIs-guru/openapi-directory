package shared

type ListApplicationsResponse struct {
	Applications []ApplicationSummary `json:"applications"`
	NextToken    *string              `json:"nextToken"`
}
