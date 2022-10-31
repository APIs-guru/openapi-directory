package operations

import (
"openapi/pkg/models/shared")

type ListingsAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    
}

type ListingsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    ExternalID *string `queryParam:"style=form,explode=true,name=external_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ListingsAllRequest struct {
    PathParams ListingsAllPathParams 
    QueryParams ListingsAllQueryParams 
    
}

type ListingsAllResponse struct {
    ContentType string 
    GetListingsResponse *shared.GetListingsResponse 
    StatusCode int64 
    
}

