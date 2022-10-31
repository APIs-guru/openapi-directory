package operations

import (
"openapi/pkg/models/shared")

type ProductUpdateActionPathParams struct {
    Action string `pathParam:"style=simple,explode=false,name=action"`
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    
}

type ProductUpdateActionRequestBody struct {
    Credits *float64 `form:"name=credits"`
    
}

type ProductUpdateActionSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductUpdateActionRequest struct {
    PathParams ProductUpdateActionPathParams 
    Request *ProductUpdateActionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security ProductUpdateActionSecurity 
    
}

type ProductUpdateActionResponse struct {
    ContentType string 
    ProductUpdateAction200ApplicationJSONAny *interface{} 
    ProductUpdateActionDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

