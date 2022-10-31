package operations

import (
"openapi/pkg/models/shared")

type ProductRetrievePathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    
}

type ProductRetrieveSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductRetrieveRequest struct {
    PathParams ProductRetrievePathParams 
    Security ProductRetrieveSecurity 
    
}

type ProductRetrieveResponse struct {
    ContentType string 
    ProductRetrieve200ApplicationJSONOneOf *interface{} 
    ProductRetrieveDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

