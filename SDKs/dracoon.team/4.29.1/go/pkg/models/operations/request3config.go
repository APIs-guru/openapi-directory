package operations

import (
"openapi/pkg/models/shared")

type Request3ConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type Request3ConfigRequest struct {
    Headers Request3ConfigHeaders 
    
}

type Request3ConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    S3Config *shared.S3Config 
    StatusCode int64 
    
}

