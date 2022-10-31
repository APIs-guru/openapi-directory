package operations

import (
"openapi/pkg/models/shared")

type GetInfoTldZonePathParams struct {
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type GetInfoTldZoneQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    
}

type GetInfoTldZoneRequest struct {
    PathParams GetInfoTldZonePathParams 
    QueryParams GetInfoTldZoneQueryParams 
    
}

type GetInfoTldZoneResponse struct {
    ContentType string 
    StatusCode int64 
    ZoneInfo *shared.ZoneInfo 
    
}

