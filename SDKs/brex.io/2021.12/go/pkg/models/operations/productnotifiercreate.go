package operations

import (
"openapi/pkg/models/shared")

type ProductNotifierCreatePathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    Type string `pathParam:"style=simple,explode=false,name=type"`
    URI string `pathParam:"style=simple,explode=false,name=uri"`
    
}

type ProductNotifierCreateSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductNotifierCreateRequest struct {
    PathParams ProductNotifierCreatePathParams 
    Security ProductNotifierCreateSecurity 
    
}

type ProductNotifierCreateResponse struct {
    ContentType string 
    ProductNotifierCreate200ApplicationJSONAny *interface{} 
    ProductNotifierCreateDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

