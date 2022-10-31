package operations

import (
"openapi/pkg/models/shared")

type CreateS3TagHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type CreateS3TagRequest struct {
    Headers CreateS3TagHeaders 
    Request shared.S3TagCreateRequest `request:"mediaType=application/json"`
    
}

type CreateS3TagResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    S3Tag *shared.S3Tag 
    StatusCode int64 
    
}

