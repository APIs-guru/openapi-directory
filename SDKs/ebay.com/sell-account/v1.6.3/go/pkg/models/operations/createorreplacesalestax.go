package operations

import (
"openapi/pkg/models/shared")

type CreateOrReplaceSalesTaxPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=countryCode"`
    JurisdictionID string `pathParam:"style=simple,explode=false,name=jurisdictionId"`
    
}

type CreateOrReplaceSalesTaxSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateOrReplaceSalesTaxRequest struct {
    PathParams CreateOrReplaceSalesTaxPathParams 
    Request shared.SalesTaxBase `request:"mediaType=application/json"`
    Security CreateOrReplaceSalesTaxSecurity 
    
}

type CreateOrReplaceSalesTaxResponse struct {
    ContentType string 
    StatusCode int64 
    
}

