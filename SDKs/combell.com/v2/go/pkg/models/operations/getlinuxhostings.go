package operations

import (
"openapi/pkg/models/shared")

type GetLinuxHostingsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetLinuxHostingsRequest struct {
    QueryParams GetLinuxHostingsQueryParams 
    
}

type GetLinuxHostingsResponse struct {
    ContentType string 
    Headers map[string][]string 
    LinuxHostings []shared.LinuxHosting 
    StatusCode int64 
    
}

