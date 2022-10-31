package shared



type Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest struct {
    MarkAsPending *bool `json:"markAsPending,omitempty" form:"name=markAsPending"`
    RecipeID *int32 `json:"recipeId,omitempty" form:"name=recipeId"`
    Scale *float64 `json:"scale,omitempty" form:"name=scale"`
    
}

