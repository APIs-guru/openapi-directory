package shared

type SearchResourcesResponse struct {
	MatchingResources []MatchingResource `json:"matchingResources,omitempty"`
	NextToken         *string            `json:"nextToken,omitempty"`
}
