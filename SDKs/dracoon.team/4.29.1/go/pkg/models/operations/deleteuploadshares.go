package operations

import (
"openapi/pkg/models/shared")

type DeleteUploadSharesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type DeleteUploadSharesRequest struct {
    Headers DeleteUploadSharesHeaders 
    Request shared.DeleteUploadSharesRequest `request:"mediaType=application/json"`
    
}

type DeleteUploadSharesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

