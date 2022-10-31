package operations

import (
"openapi/pkg/models/shared")

type GetMessagesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMessagesIDRequest struct {
    PathParams GetMessagesIDPathParams 
    
}

type GetMessagesIDResponse struct {
    ContentType string 
    Error *shared.Error 
    Message *shared.Message 
    StatusCode int64 
    
}

