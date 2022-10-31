package operations

import (
"openapi/pkg/models/shared")

type GetMessageCommentsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMessageCommentsIDRequest struct {
    PathParams GetMessageCommentsIDPathParams 
    
}

type GetMessageCommentsIDResponse struct {
    ContentType string 
    MessageCommentEntity *shared.MessageCommentEntity 
    StatusCode int64 
    
}

