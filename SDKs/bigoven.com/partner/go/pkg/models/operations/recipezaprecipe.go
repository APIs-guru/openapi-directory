package operations

type RecipeZapRecipePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type RecipeZapRecipeRequest struct {
	PathParams RecipeZapRecipePathParams
}

type RecipeZapRecipeResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
