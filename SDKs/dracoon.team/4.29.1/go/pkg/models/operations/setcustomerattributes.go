package operations

import (
"openapi/pkg/models/shared")

type SetCustomerAttributesPathParams struct {
    CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
    
}

type SetCustomerAttributesHeaders struct {
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type SetCustomerAttributesRequest struct {
    PathParams SetCustomerAttributesPathParams 
    Headers SetCustomerAttributesHeaders 
    Request shared.CustomerAttributes `request:"mediaType=application/json"`
    
}

type SetCustomerAttributesResponse struct {
    ContentType string 
    Customer *shared.Customer 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

