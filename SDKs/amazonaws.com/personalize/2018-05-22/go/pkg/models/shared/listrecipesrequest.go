package shared



type ListRecipesRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RecipeProvider *RecipeProviderEnum `json:"recipeProvider,omitempty"`
    
}

