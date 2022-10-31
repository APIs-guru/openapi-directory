package operations

import (
"openapi/pkg/models/shared")

type GetItemsBatchInternalTrasnferPathParams struct {
    BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
    
}

type GetItemsBatchInternalTrasnferQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetItemsBatchInternalTrasnferRequest struct {
    PathParams GetItemsBatchInternalTrasnferPathParams 
    QueryParams GetItemsBatchInternalTrasnferQueryParams 
    
}

type GetItemsBatchInternalTrasnferResponse struct {
    ContentType string 
    StatusCode int64 
    OnebatchesGetResponses200ContentApplication1jsonSchema *shared.OnebatchesGetResponses200ContentApplication1jsonSchema 
    
}

