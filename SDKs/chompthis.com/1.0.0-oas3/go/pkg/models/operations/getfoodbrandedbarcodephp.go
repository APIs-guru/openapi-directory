package operations

import (
"openapi/pkg/models/shared")

type GetFoodBrandedBarcodePhpQueryParams struct {
    Code string `queryParam:"style=form,explode=true,name=code"`
    
}

type GetFoodBrandedBarcodePhpSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetFoodBrandedBarcodePhpRequest struct {
    QueryParams GetFoodBrandedBarcodePhpQueryParams 
    Security GetFoodBrandedBarcodePhpSecurity 
    
}

type GetFoodBrandedBarcodePhpResponse struct {
    BrandedFoodObject *shared.BrandedFoodObject 
    ContentType string 
    StatusCode int64 
    
}

