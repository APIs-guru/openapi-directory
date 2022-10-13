package shared

type GetSystemTemplateRevisionsRequest struct {
	ID         string  `json:"id"`
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
