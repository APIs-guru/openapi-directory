package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1DonationsCarbonStatsQueryParams struct {
    ID *float64 `queryParam:"style=form,explode=true,name=id"`
    
}

type GetAPIV1DonationsCarbonStatsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetAPIV1DonationsCarbonStatsRequest struct {
    QueryParams GetAPIV1DonationsCarbonStatsQueryParams 
    Security GetAPIV1DonationsCarbonStatsSecurity 
    
}

type GetAPIV1DonationsCarbonStatsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

