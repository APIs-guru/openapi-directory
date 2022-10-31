package operations

import (
"openapi/pkg/models/shared")

type QuotePutPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type QuotePutRequest struct {
    PathParams QuotePutPathParams 
    Request shared.QuoteDto `request:"mediaType=application/json"`
    
}

type QuotePutResponse struct {
    ContentType string 
    QuotePut200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

