package operations

import (
"openapi/pkg/models/shared")

type FileCommentListForPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type FileCommentListForPathQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type FileCommentListForPathRequest struct {
    PathParams FileCommentListForPathPathParams 
    QueryParams FileCommentListForPathQueryParams 
    
}

type FileCommentListForPathResponse struct {
    ContentType string 
    FileCommentEntities []shared.FileCommentEntity 
    StatusCode int64 
    
}

