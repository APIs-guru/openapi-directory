package operations

import (
"openapi/pkg/models/shared")

type GetSiteUsageResponse struct {
    ContentType string 
    StatusCode int64 
    UsageSnapshotEntity *shared.UsageSnapshotEntity 
    
}

