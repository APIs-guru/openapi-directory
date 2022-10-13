package operations

type RecipeGetStepQueryParams struct {
	RecipeID int32  `queryParam:"style=form,explode=true,name=recipeId"`
	StepID   int32  `queryParam:"style=form,explode=true,name=stepId"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type RecipeGetStepRequest struct {
	QueryParams RecipeGetStepQueryParams
}

type RecipeGetStepResponse struct {
	Body                                  []byte
	ContentType                           string
	RecipeGetStep200ApplicationJSONString *string
	RecipeGetStep200TextJSONString        *string
	StatusCode                            int64
}
