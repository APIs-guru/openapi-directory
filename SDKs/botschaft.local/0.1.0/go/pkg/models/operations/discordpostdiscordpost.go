package operations

import (
"openapi/pkg/models/shared")

type DiscordPostDiscordPostHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=authorization"`
    
}

type DiscordPostDiscordPostRequest struct {
    Headers DiscordPostDiscordPostHeaders 
    Request shared.DiscordMessageRequest `request:"mediaType=application/json"`
    
}

type DiscordPostDiscordPostResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    DiscordPostDiscordPost200ApplicationJSONAny *interface{} 
    
}

