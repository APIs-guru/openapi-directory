package shared

type ListTagsForResourceRequest struct {
	MaxResults  *int64  `json:"maxResults"`
	NextToken   *string `json:"nextToken"`
	ResourceArn string  `json:"resourceArn"`
}
