package operations

import (
"openapi/pkg/models/shared")

type UpdateFilePathParams struct {
    FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type UpdateFileHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type UpdateFileRequest struct {
    PathParams UpdateFilePathParams 
    Headers UpdateFileHeaders 
    Request shared.UpdateFileRequest `request:"mediaType=application/json"`
    
}

type UpdateFileResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Node *shared.Node 
    StatusCode int64 
    
}

