package operations

import (
"openapi/pkg/models/shared")

type GetMessagesIDRelatedReceivedMessagesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMessagesIDRelatedReceivedMessagesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetMessagesIDRelatedReceivedMessagesRequest struct {
    PathParams GetMessagesIDRelatedReceivedMessagesPathParams 
    Security GetMessagesIDRelatedReceivedMessagesSecurity 
    
}

type GetMessagesIDRelatedReceivedMessagesResponse struct {
    ContentType string 
    Error *shared.Error 
    Messages []shared.Message 
    StatusCode int64 
    
}

