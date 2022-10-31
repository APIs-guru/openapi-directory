package operations

import (
"openapi/pkg/models/shared")

type GenerateDownloadURLPublicPathParams struct {
    AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
    
}

type GenerateDownloadURLPublicRequest struct {
    PathParams GenerateDownloadURLPublicPathParams 
    Request shared.PublicDownloadTokenGenerateRequest `request:"mediaType=application/json"`
    
}

type GenerateDownloadURLPublicResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PublicDownloadTokenGenerateResponse *shared.PublicDownloadTokenGenerateResponse 
    StatusCode int64 
    
}

