package operations

import (
"openapi/pkg/models/shared")

type UpdateFilesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateFilesRequest struct {
    Headers UpdateFilesHeaders 
    Request shared.UpdateFilesBulkRequest `request:"mediaType=application/json"`
    
}

type UpdateFilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

