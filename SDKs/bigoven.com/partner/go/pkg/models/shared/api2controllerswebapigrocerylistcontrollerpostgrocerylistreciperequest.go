package shared

type Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest struct {
	MarkAsPending *bool    `json:"markAsPending" form:"name=markAsPending"`
	RecipeID      *int32   `json:"recipeId" form:"name=recipeId"`
	Scale         *float64 `json:"scale" form:"name=scale"`
}
