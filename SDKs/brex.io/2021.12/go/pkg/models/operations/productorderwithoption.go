package operations

import (
"openapi/pkg/models/shared")

type ProductOrderWithOptionPathParams struct {
    Option string `pathParam:"style=simple,explode=false,name=option"`
    Sku string `pathParam:"style=simple,explode=false,name=sku"`
    SubjectID string `pathParam:"style=simple,explode=false,name=subjectId"`
    
}

type ProductOrderWithOptionSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductOrderWithOptionRequest struct {
    PathParams ProductOrderWithOptionPathParams 
    Security ProductOrderWithOptionSecurity 
    
}

type ProductOrderWithOptionResponse struct {
    ContentType string 
    ProductOrderWithOption200ApplicationJSONAny *interface{} 
    ProductOrderWithOptionDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

