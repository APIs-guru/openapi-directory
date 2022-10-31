package operations

import (
"openapi/pkg/models/shared")

type RemoveCustomerAttributePathParams struct {
    CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
    Key string `pathParam:"style=simple,explode=false,name=key"`
    
}

type RemoveCustomerAttributeHeaders struct {
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type RemoveCustomerAttributeRequest struct {
    PathParams RemoveCustomerAttributePathParams 
    Headers RemoveCustomerAttributeHeaders 
    
}

type RemoveCustomerAttributeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

