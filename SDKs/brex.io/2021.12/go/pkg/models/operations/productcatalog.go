package operations

import (
"openapi/pkg/models/shared")

type ProductCatalogPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    
}

type ProductCatalogSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductCatalogRequest struct {
    PathParams ProductCatalogPathParams 
    Security ProductCatalogSecurity 
    
}

type ProductCatalogResponse struct {
    ContentType string 
    ProductCatalog200ApplicationJSONAny *interface{} 
    ProductCatalogDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

