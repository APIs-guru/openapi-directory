package operations

import (
"openapi/pkg/models/shared")

type CollectionListingsAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CollectionListingsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type CollectionListingsAllRequest struct {
    PathParams CollectionListingsAllPathParams 
    QueryParams CollectionListingsAllQueryParams 
    
}

type CollectionListingsAllResponse struct {
    ContentType string 
    GetListingsResponse *shared.GetListingsResponse 
    StatusCode int64 
    
}

