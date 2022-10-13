package shared

type ListActivitiesInput struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
