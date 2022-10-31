package operations

import (
"openapi/pkg/models/shared")

type GetV1QuotesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1QuotesIDRequest struct {
    PathParams GetV1QuotesIDPathParams 
    
}

type GetV1QuotesIDResponse struct {
    ContentType string 
    QuoteDto *shared.QuoteDto 
    StatusCode int64 
    
}

