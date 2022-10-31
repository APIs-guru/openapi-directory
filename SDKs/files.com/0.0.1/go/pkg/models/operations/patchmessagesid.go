package operations

import (
"openapi/pkg/models/shared")

type PatchMessagesIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchMessagesIDRequestBody struct {
    Body string `multipartForm:"name=body"`
    ProjectID int32 `multipartForm:"name=project_id"`
    Subject string `multipartForm:"name=subject"`
    
}

type PatchMessagesIDRequest struct {
    PathParams PatchMessagesIDPathParams 
    Request PatchMessagesIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchMessagesIDResponse struct {
    ContentType string 
    MessageEntity *shared.MessageEntity 
    StatusCode int64 
    
}

