package shared

type ListAppsResponse struct {
	Apps      []AppSummary `json:"apps"`
	NextToken *string      `json:"nextToken"`
}
