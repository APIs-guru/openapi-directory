package shared

type Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest struct {
	Department *string `json:"department" form:"name=department"`
	Name       *string `json:"name" form:"name=name"`
	Notes      *string `json:"notes" form:"name=notes"`
	Quantity   *string `json:"quantity" form:"name=quantity"`
	Unit       *string `json:"unit" form:"name=unit"`
}
