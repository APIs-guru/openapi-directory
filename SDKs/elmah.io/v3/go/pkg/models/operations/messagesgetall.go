package operations

import (
"time"
"openapi/pkg/models/shared")

type MessagesGetAllPathParams struct {
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type MessagesGetAllQueryParams struct {
    From *time.Time `queryParam:"style=form,explode=true,name=from"`
    IncludeHeaders *bool `queryParam:"style=form,explode=true,name=includeHeaders"`
    PageIndex *int32 `queryParam:"style=form,explode=true,name=pageIndex"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    To *time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type MessagesGetAllRequest struct {
    PathParams MessagesGetAllPathParams 
    QueryParams MessagesGetAllQueryParams 
    
}

type MessagesGetAllResponse struct {
    Body []byte 
    ContentType string 
    MessagesResult *shared.MessagesResult 
    StatusCode int64 
    
}

