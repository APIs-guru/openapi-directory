package operations

import (
"openapi/pkg/models/shared")

type CustomersGetQuotesPathParams struct {
    ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type CustomersGetQuotesRequest struct {
    PathParams CustomersGetQuotesPathParams 
    
}

type CustomersGetQuotesResponse struct {
    ContentType string 
    QuoteDtos []shared.QuoteDto 
    StatusCode int64 
    
}

