package operations

import (
"openapi/pkg/models/shared")

type DeleteSalesTaxPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=countryCode"`
    JurisdictionID string `pathParam:"style=simple,explode=false,name=jurisdictionId"`
    
}

type DeleteSalesTaxSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DeleteSalesTaxRequest struct {
    PathParams DeleteSalesTaxPathParams 
    Security DeleteSalesTaxSecurity 
    
}

type DeleteSalesTaxResponse struct {
    ContentType string 
    StatusCode int64 
    
}

