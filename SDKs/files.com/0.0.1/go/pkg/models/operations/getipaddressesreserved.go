package operations

import (
"openapi/pkg/models/shared")

type GetIPAddressesReservedQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetIPAddressesReservedRequest struct {
    QueryParams GetIPAddressesReservedQueryParams 
    
}

type GetIPAddressesReservedResponse struct {
    ContentType string 
    PublicIPAddressEntities []shared.PublicIPAddressEntity 
    StatusCode int64 
    
}

