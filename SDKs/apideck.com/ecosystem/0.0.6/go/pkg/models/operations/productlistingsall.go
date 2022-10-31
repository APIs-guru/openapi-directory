package operations

import (
"openapi/pkg/models/shared")

type ProductListingsAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ProductListingsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ProductListingsAllRequest struct {
    PathParams ProductListingsAllPathParams 
    QueryParams ProductListingsAllQueryParams 
    
}

type ProductListingsAllResponse struct {
    ContentType string 
    GetListingsResponse *shared.GetListingsResponse 
    StatusCode int64 
    
}

