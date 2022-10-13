package shared

type ListAppsRequest struct {
	AppIds     []string `json:"appIds"`
	MaxResults *int64   `json:"maxResults"`
	NextToken  *string  `json:"nextToken"`
}
