package operations

import (
"time"
"openapi/pkg/models/shared")

type HistoryListForFilePathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type HistoryListForFileQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Display *string `queryParam:"style=form,explode=true,name=display"`
    EndAt *time.Time `queryParam:"style=form,explode=true,name=end_at"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
    StartAt *time.Time `queryParam:"style=form,explode=true,name=start_at"`
    
}

type HistoryListForFileRequest struct {
    PathParams HistoryListForFilePathParams 
    QueryParams HistoryListForFileQueryParams 
    
}

type HistoryListForFileResponse struct {
    ActionEntities []shared.ActionEntity 
    ContentType string 
    StatusCode int64 
    
}

