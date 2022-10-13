package shared

type ListRecipesResponse struct {
	NextToken *string         `json:"nextToken"`
	Recipes   []RecipeSummary `json:"recipes"`
}
