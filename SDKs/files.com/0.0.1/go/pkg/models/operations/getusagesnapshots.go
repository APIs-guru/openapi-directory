package operations

import (
"openapi/pkg/models/shared")

type GetUsageSnapshotsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetUsageSnapshotsRequest struct {
    QueryParams GetUsageSnapshotsQueryParams 
    
}

type GetUsageSnapshotsResponse struct {
    ContentType string 
    StatusCode int64 
    UsageSnapshotEntities []shared.UsageSnapshotEntity 
    
}

