package operations

import (
"openapi/pkg/models/shared")

type GetV3CustomersCurrentHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3CustomersCurrentRequest struct {
    Headers GetV3CustomersCurrentHeaders 
    
}

type GetV3CustomersCurrentResponse struct {
    ContentType string 
    CustomerInfoResponse *shared.CustomerInfoResponse 
    StatusCode int64 
    
}

