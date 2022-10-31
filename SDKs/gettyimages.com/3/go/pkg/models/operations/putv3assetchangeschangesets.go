package operations

import (
"openapi/pkg/models/shared")

type PutV3AssetChangesChangeSetsQueryParams struct {
    BatchSize *int32 `queryParam:"style=form,explode=true,name=batch_size"`
    ChannelID *int32 `queryParam:"style=form,explode=true,name=channel_id"`
    
}

type PutV3AssetChangesChangeSetsRequest struct {
    QueryParams PutV3AssetChangesChangeSetsQueryParams 
    
}

type PutV3AssetChangesChangeSetsResponse struct {
    AssetChanges *shared.AssetChanges 
    ContentType string 
    StatusCode int64 
    
}

