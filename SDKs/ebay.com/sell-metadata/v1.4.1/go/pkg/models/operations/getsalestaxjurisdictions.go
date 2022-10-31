package operations

import (
"openapi/pkg/models/shared")

type GetSalesTaxJurisdictionsPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=countryCode"`
    
}

type GetSalesTaxJurisdictionsSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetSalesTaxJurisdictionsRequest struct {
    PathParams GetSalesTaxJurisdictionsPathParams 
    Security GetSalesTaxJurisdictionsSecurity 
    
}

type GetSalesTaxJurisdictionsResponse struct {
    ContentType string 
    SalesTaxJurisdictions *shared.SalesTaxJurisdictions 
    StatusCode int64 
    
}

