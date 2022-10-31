package operations

import (
	"openapi/pkg/models/shared"
)

type GroceryListGroceryListItemGUIDPathParams struct {
	GUID string `pathParam:"style=simple,explode=false,name=guid"`
}

type GroceryListGroceryListItemGUIDRequests struct {
	Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest  *shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest `request:"mediaType=application/json"`
	Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest1 *shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest2 *shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest `request:"mediaType=text/json"`
	ApplicationXML                                                     []byte                                                                    `request:"mediaType=application/xml"`
	TextXML                                                            []byte                                                                    `request:"mediaType=text/xml"`
}

type GroceryListGroceryListItemGUIDRequest struct {
	PathParams GroceryListGroceryListItemGUIDPathParams
	Request    GroceryListGroceryListItemGUIDRequests
}

type GroceryListGroceryListItemGUIDResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
