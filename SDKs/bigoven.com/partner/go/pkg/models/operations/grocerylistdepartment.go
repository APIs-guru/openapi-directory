package operations

import (
"openapi/pkg/models/shared")

type GroceryListDepartmentRequests struct {
    Api2ControllersWebAPIGroceryListControllerDepartmentModel *shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel `request:"mediaType=application/json"`
    Api2ControllersWebAPIGroceryListControllerDepartmentModel1 *shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPIGroceryListControllerDepartmentModel2 *shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type GroceryListDepartmentRequest struct {
    Request GroceryListDepartmentRequests 
    
}

type GroceryListDepartmentResponse struct {
    Api2GroceryListDepartmentResults []shared.Api2GroceryListDepartmentResult 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

