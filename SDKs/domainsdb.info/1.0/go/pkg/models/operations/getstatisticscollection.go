package operations

import (
"openapi/pkg/models/shared")

type GetStatisticsCollectionQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    
}

type GetStatisticsCollectionRequest struct {
    QueryParams GetStatisticsCollectionQueryParams 
    
}

type GetStatisticsCollectionResponse struct {
    ContentType string 
    StatusCode int64 
    ZoneStats []shared.ZoneStats 
    
}

