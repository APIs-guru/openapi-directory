package operations

import (
"openapi/pkg/models/shared")

type RequestNodeCommentsPathParams struct {
    NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type RequestNodeCommentsQueryParams struct {
    HideDeleted *bool `queryParam:"style=form,explode=true,name=hide_deleted"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type RequestNodeCommentsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestNodeCommentsRequest struct {
    PathParams RequestNodeCommentsPathParams 
    QueryParams RequestNodeCommentsQueryParams 
    Headers RequestNodeCommentsHeaders 
    
}

type RequestNodeCommentsResponse struct {
    CommentList *shared.CommentList 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

