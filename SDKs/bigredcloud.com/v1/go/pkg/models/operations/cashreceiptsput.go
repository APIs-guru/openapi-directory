package operations

import (
"openapi/pkg/models/shared")

type CashReceiptsPutPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CashReceiptsPutRequest struct {
    PathParams CashReceiptsPutPathParams 
    Request shared.CashReceiptDto `request:"mediaType=application/json"`
    
}

type CashReceiptsPutResponse struct {
    CashReceiptsPut200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

