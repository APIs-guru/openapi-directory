package operations

import (
"openapi/pkg/models/shared")

type GetAvailablePhpVersionsPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type GetAvailablePhpVersionsQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type GetAvailablePhpVersionsRequest struct {
    PathParams GetAvailablePhpVersionsPathParams 
    QueryParams GetAvailablePhpVersionsQueryParams 
    
}

type GetAvailablePhpVersionsResponse struct {
    ContentType string 
    PhpVersions []shared.PhpVersion 
    StatusCode int64 
    
}

