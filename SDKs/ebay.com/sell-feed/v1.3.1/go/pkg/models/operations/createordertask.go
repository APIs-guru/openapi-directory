package operations

import (
"openapi/pkg/models/shared")

type CreateOrderTaskHeaders struct {
    XEbayCMarketplaceID *string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
    
}

type CreateOrderTaskSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateOrderTaskRequest struct {
    Headers CreateOrderTaskHeaders 
    Request shared.CreateOrderTaskRequest `request:"mediaType=application/json"`
    Security CreateOrderTaskSecurity 
    
}

type CreateOrderTaskResponse struct {
    ContentType string 
    StatusCode int64 
    
}

