package operations

import (
"openapi/pkg/models/shared")

type GetWindowsHostingsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetWindowsHostingsRequest struct {
    QueryParams GetWindowsHostingsQueryParams 
    
}

type GetWindowsHostingsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    WindowsHostings []shared.WindowsHosting 
    
}

