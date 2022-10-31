package operations

import (
"openapi/pkg/models/shared")

type PostUploadTokensSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostUploadTokensRequest struct {
    Request *shared.TokenCreatePayload `request:"mediaType=application/json"`
    Security PostUploadTokensSecurity 
    
}

type PostUploadTokensResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    UploadToken *shared.UploadToken 
    
}

