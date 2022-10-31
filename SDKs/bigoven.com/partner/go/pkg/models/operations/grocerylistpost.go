package operations

import (
"openapi/pkg/models/shared")

type GroceryListPostRequests struct {
    Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest `request:"mediaType=application/json"`
    Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest1 *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest2 *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type GroceryListPostRequest struct {
    Request GroceryListPostRequests 
    
}

type GroceryListPostResponse struct {
    BigOvenModelShoppingListLine *shared.BigOvenModelShoppingListLine 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

