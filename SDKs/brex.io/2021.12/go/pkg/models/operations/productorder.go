package operations

import (
"openapi/pkg/models/shared")

type ProductOrderPathParams struct {
    Sku string `pathParam:"style=simple,explode=false,name=sku"`
    SubjectID string `pathParam:"style=simple,explode=false,name=subjectId"`
    
}

type ProductOrderSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductOrderRequest struct {
    PathParams ProductOrderPathParams 
    Security ProductOrderSecurity 
    
}

type ProductOrderResponse struct {
    ContentType string 
    ProductOrder200ApplicationJSONAny *interface{} 
    ProductOrderDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

