package operations

import (
"openapi/pkg/models/shared")

type SystemPricelistSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SystemPricelistRequest struct {
    Security SystemPricelistSecurity 
    
}

type SystemPricelistResponse struct {
    ContentType string 
    StatusCode int64 
    SystemPricelist200ApplicationJSONAnies []interface{} 
    SystemPricelistDefaultApplicationJSONAny *interface{} 
    
}

