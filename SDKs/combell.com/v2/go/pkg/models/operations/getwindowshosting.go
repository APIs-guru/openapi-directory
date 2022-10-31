package operations

import (
"openapi/pkg/models/shared")

type GetWindowsHostingPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type GetWindowsHostingQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type GetWindowsHostingRequest struct {
    PathParams GetWindowsHostingPathParams 
    QueryParams GetWindowsHostingQueryParams 
    
}

type GetWindowsHostingResponse struct {
    ContentType string 
    StatusCode int64 
    WindowsHostingDetail *shared.WindowsHostingDetail 
    
}

