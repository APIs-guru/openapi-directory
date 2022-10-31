package operations

import (
"openapi/pkg/models/shared")

type GetSyncJobsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetSyncJobsRequest struct {
    QueryParams GetSyncJobsQueryParams 
    
}

type GetSyncJobsResponse struct {
    ContentType string 
    StatusCode int64 
    SyncJobEntities []shared.SyncJobEntity 
    
}

