package shared

type ListEnvironmentTemplatesInput struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
