package operations

import (
"openapi/pkg/models/shared")

type ProductNotifierPathParams struct {
    NotifierID string `pathParam:"style=simple,explode=false,name=notifierId"`
    
}

type ProductNotifierSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductNotifierRequest struct {
    PathParams ProductNotifierPathParams 
    Security ProductNotifierSecurity 
    
}

type ProductNotifierResponse struct {
    ContentType string 
    ProductNotifier200ApplicationJSONAny *interface{} 
    ProductNotifierDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

