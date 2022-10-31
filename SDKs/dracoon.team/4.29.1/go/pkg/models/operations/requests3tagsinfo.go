package operations

import (
"openapi/pkg/models/shared")

type RequestS3TagsInfoHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestS3TagsInfoRequest struct {
    Headers RequestS3TagsInfoHeaders 
    
}

type RequestS3TagsInfoResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    S3TagList *shared.S3TagList 
    StatusCode int64 
    
}

