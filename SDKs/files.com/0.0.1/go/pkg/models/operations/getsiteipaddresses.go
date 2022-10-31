package operations

import (
"openapi/pkg/models/shared")

type GetSiteIPAddressesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetSiteIPAddressesRequest struct {
    QueryParams GetSiteIPAddressesQueryParams 
    
}

type GetSiteIPAddressesResponse struct {
    ContentType string 
    IPAddressEntities []shared.IPAddressEntity 
    StatusCode int64 
    
}

