package operations

import (
"openapi/pkg/models/shared")

type SlackPostSlackPostHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=authorization"`
    
}

type SlackPostSlackPostRequest struct {
    Headers SlackPostSlackPostHeaders 
    Request shared.SlackMessageRequest `request:"mediaType=application/json"`
    
}

type SlackPostSlackPostResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    SlackPostSlackPost200ApplicationJSONAny *interface{} 
    
}

