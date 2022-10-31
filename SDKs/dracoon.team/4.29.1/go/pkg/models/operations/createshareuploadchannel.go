package operations

import (
"openapi/pkg/models/shared")

type CreateShareUploadChannelPathParams struct {
    AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
    
}

type CreateShareUploadChannelRequest struct {
    PathParams CreateShareUploadChannelPathParams 
    Request shared.CreateShareUploadChannelRequest `request:"mediaType=application/json"`
    
}

type CreateShareUploadChannelResponse struct {
    ContentType string 
    CreateShareUploadChannelResponse *shared.CreateShareUploadChannelResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

