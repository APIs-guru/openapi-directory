package operations

import (
"openapi/pkg/models/shared")

type GetRecallHistoryPathParams struct {
    Vin string `pathParam:"style=simple,explode=false,name=vin"`
    
}

type GetRecallHistoryQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetRecallHistoryRequest struct {
    PathParams GetRecallHistoryPathParams 
    QueryParams GetRecallHistoryQueryParams 
    
}

type GetRecallHistoryResponse struct {
    ContentType string 
    Error *shared.Error 
    SearchResponse *shared.SearchResponse 
    StatusCode int64 
    
}

