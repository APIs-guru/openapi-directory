package operations

import (
"openapi/pkg/models/shared")

type GetVideosIDCommentThreadsPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetVideosIDCommentThreadsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *shared.CommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetVideosIDCommentThreadsRequest struct {
    PathParams GetVideosIDCommentThreadsPathParams 
    QueryParams GetVideosIDCommentThreadsQueryParams 
    
}

type GetVideosIDCommentThreadsResponse struct {
    CommentThreadResponse *interface{} 
    ContentType string 
    StatusCode int64 
    
}

