package shared

type ListResourcesResponse struct {
	NextToken *string    `json:"nextToken"`
	Resources []Resource `json:"resources"`
}
