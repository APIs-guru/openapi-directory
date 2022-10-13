package shared

type ListRecipesRequest struct {
	MaxResults     *int64              `json:"maxResults"`
	NextToken      *string             `json:"nextToken"`
	RecipeProvider *RecipeProviderEnum `json:"recipeProvider"`
}
