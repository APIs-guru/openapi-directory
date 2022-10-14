package shared

type ListRecipesResponse struct {
	NextToken *string         `json:"nextToken,omitempty"`
	Recipes   []RecipeSummary `json:"recipes,omitempty"`
}
