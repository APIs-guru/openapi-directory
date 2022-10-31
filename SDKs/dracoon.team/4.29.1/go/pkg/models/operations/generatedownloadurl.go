package operations

import (
"openapi/pkg/models/shared")

type GenerateDownloadURLPathParams struct {
    FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type GenerateDownloadURLHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type GenerateDownloadURLRequest struct {
    PathParams GenerateDownloadURLPathParams 
    Headers GenerateDownloadURLHeaders 
    
}

type GenerateDownloadURLResponse struct {
    ContentType string 
    DownloadTokenGenerateResponse *shared.DownloadTokenGenerateResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

