package operations

import (
	"openapi/pkg/models/shared"
)

type PostGrocerylistItemRequests struct {
	Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest  *shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest `request:"mediaType=application/json"`
	Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest1 *shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest2 *shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest `request:"mediaType=text/json"`
	ApplicationXML                                                            []byte                                                                           `request:"mediaType=application/xml"`
	TextXML                                                                   []byte                                                                           `request:"mediaType=text/xml"`
}

type PostGrocerylistItemRequest struct {
	Request PostGrocerylistItemRequests
}

type PostGrocerylistItemResponse struct {
	BigOvenModelShoppingListLine *shared.BigOvenModelShoppingListLine
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
}
