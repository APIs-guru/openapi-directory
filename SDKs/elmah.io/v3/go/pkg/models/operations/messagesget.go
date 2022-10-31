package operations

import (
"openapi/pkg/models/shared")

type MessagesGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type MessagesGetRequest struct {
    PathParams MessagesGetPathParams 
    
}

type MessagesGetResponse struct {
    Body []byte 
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

