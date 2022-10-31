package operations

import (
"openapi/pkg/models/shared")

type GenerateDownloadURLForZipArchiveHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type GenerateDownloadURLForZipArchiveRequest struct {
    Headers GenerateDownloadURLForZipArchiveHeaders 
    Request shared.ZipDownloadRequest `request:"mediaType=application/json"`
    
}

type GenerateDownloadURLForZipArchiveResponse struct {
    ContentType string 
    DownloadTokenGenerateResponse *shared.DownloadTokenGenerateResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

