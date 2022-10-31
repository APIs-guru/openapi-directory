package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1DonationsIndexQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetAPIV1DonationsIndexSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetAPIV1DonationsIndexRequest struct {
    QueryParams GetAPIV1DonationsIndexQueryParams 
    Security GetAPIV1DonationsIndexSecurity 
    
}

type GetAPIV1DonationsIndexResponse struct {
    ContentType string 
    StatusCode int64 
    
}

