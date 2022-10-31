package operations

import (
"openapi/pkg/models/shared")

type GroceryListAddRecipeRequests struct {
    Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest `request:"mediaType=application/json"`
    Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest1 *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest2 *shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type GroceryListAddRecipeRequest struct {
    Request GroceryListAddRecipeRequests 
    
}

type GroceryListAddRecipeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

