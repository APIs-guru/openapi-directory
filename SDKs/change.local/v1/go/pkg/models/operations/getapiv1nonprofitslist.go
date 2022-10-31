package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1NonprofitsListQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetAPIV1NonprofitsListSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetAPIV1NonprofitsListRequest struct {
    QueryParams GetAPIV1NonprofitsListQueryParams 
    Security GetAPIV1NonprofitsListSecurity 
    
}

type GetAPIV1NonprofitsListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

