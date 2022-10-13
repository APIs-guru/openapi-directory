package shared

type ListAssociatedResourcesResponse struct {
	NextToken *string        `json:"nextToken"`
	Resources []ResourceInfo `json:"resources"`
}
