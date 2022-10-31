package operations

import (
"openapi/pkg/models/shared")

type GetHistoryExportResultsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    HistoryExportID int32 `queryParam:"style=form,explode=true,name=history_export_id"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetHistoryExportResultsRequest struct {
    QueryParams GetHistoryExportResultsQueryParams 
    
}

type GetHistoryExportResultsResponse struct {
    ContentType string 
    HistoryExportResultEntities []shared.HistoryExportResultEntity 
    StatusCode int64 
    
}

