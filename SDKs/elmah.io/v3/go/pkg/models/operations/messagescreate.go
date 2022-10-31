package operations

import (
"openapi/pkg/models/shared")

type MessagesCreatePathParams struct {
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type MessagesCreateRequests struct {
    CreateMessage *shared.CreateMessage `request:"mediaType=application/*+json"`
    CreateMessage1 *shared.CreateMessage `request:"mediaType=application/json"`
    CreateMessage2 *shared.CreateMessage `request:"mediaType=application/json-patch+json"`
    CreateMessage3 *shared.CreateMessage `request:"mediaType=text/json"`
    
}

type MessagesCreateRequest struct {
    PathParams MessagesCreatePathParams 
    Request *MessagesCreateRequests 
    
}

type MessagesCreateResponse struct {
    Body []byte 
    ContentType string 
    CreateMessageResult *shared.CreateMessageResult 
    StatusCode int64 
    
}

