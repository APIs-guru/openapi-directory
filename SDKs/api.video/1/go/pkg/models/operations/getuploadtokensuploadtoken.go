package operations

import (
"openapi/pkg/models/shared")

type GetUploadTokensUploadTokenPathParams struct {
    UploadToken string `pathParam:"style=simple,explode=false,name=uploadToken"`
    
}

type GetUploadTokensUploadTokenSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetUploadTokensUploadTokenRequest struct {
    PathParams GetUploadTokensUploadTokenPathParams 
    Security GetUploadTokensUploadTokenSecurity 
    
}

type GetUploadTokensUploadTokenResponse struct {
    ContentType string 
    StatusCode int64 
    NotFound *shared.NotFound 
    UploadToken *shared.UploadToken 
    
}

