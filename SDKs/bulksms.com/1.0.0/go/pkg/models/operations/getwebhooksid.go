package operations

import (
"openapi/pkg/models/shared")

type GetWebhooksIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetWebhooksIDRequest struct {
    PathParams GetWebhooksIDPathParams 
    
}

type GetWebhooksIDResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    Webhook *shared.Webhook 
    
}

