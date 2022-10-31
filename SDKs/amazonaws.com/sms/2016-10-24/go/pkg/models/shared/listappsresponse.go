package shared

type ListAppsResponse struct {
	Apps      []AppSummary `json:"apps,omitempty"`
	NextToken *string      `json:"nextToken,omitempty"`
}
