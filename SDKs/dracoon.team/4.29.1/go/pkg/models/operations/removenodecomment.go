package operations

import (
"openapi/pkg/models/shared")

type RemoveNodeCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    
}

type RemoveNodeCommentHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveNodeCommentRequest struct {
    PathParams RemoveNodeCommentPathParams 
    Headers RemoveNodeCommentHeaders 
    
}

type RemoveNodeCommentResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

