package operations

import (
"openapi/pkg/models/shared")

type UpdateNodeCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    
}

type UpdateNodeCommentHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type UpdateNodeCommentRequest struct {
    PathParams UpdateNodeCommentPathParams 
    Headers UpdateNodeCommentHeaders 
    Request shared.ChangeNodeCommentRequest `request:"mediaType=application/json"`
    
}

type UpdateNodeCommentResponse struct {
    Comment *shared.Comment 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

