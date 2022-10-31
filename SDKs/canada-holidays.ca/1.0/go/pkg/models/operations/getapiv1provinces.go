package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1ProvincesQueryParams struct {
    Year *string `queryParam:"style=form,explode=true,name=year"`
    
}

type GetAPIV1ProvincesRequest struct {
    QueryParams GetAPIV1ProvincesQueryParams 
    
}

type GetAPIV1Provinces200ApplicationJSON struct {
    Provinces []shared.Province `json:"provinces,omitempty"`
    
}

type GetAPIV1ProvincesResponse struct {
    ContentType string 
    StatusCode int64 
    GetAPIV1Provinces200ApplicationJSONObject *GetAPIV1Provinces200ApplicationJSON 
    
}

