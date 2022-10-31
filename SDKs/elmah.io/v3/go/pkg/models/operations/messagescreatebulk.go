package operations

import (
"openapi/pkg/models/shared")

type MessagesCreateBulkPathParams struct {
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type MessagesCreateBulkRequests struct {
    CreateMessages []shared.CreateMessage `request:"mediaType=application/*+json"`
    CreateMessages1 []shared.CreateMessage `request:"mediaType=application/json"`
    CreateMessages2 []shared.CreateMessage `request:"mediaType=application/json-patch+json"`
    CreateMessages3 []shared.CreateMessage `request:"mediaType=text/json"`
    
}

type MessagesCreateBulkRequest struct {
    PathParams MessagesCreateBulkPathParams 
    Request *MessagesCreateBulkRequests 
    
}

type MessagesCreateBulkResponse struct {
    Body []byte 
    ContentType string 
    CreateBulkMessageResults []shared.CreateBulkMessageResult 
    StatusCode int64 
    
}

