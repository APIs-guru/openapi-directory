package shared



type Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest struct {
    Department *string `json:"department,omitempty" form:"name=department"`
    Name *string `json:"name,omitempty" form:"name=name"`
    Notes *string `json:"notes,omitempty" form:"name=notes"`
    Quantity *string `json:"quantity,omitempty" form:"name=quantity"`
    Unit *string `json:"unit,omitempty" form:"name=unit"`
    
}

