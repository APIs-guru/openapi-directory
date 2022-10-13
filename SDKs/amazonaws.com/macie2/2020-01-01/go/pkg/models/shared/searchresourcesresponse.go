package shared

type SearchResourcesResponse struct {
	MatchingResources []MatchingResource `json:"matchingResources"`
	NextToken         *string            `json:"nextToken"`
}
