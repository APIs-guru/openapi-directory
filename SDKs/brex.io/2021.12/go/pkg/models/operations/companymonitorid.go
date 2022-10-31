package operations

import (
"openapi/pkg/models/shared")

type CompanyMonitorIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CompanyMonitorIDSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyMonitorIDRequest struct {
    PathParams CompanyMonitorIDPathParams 
    Security CompanyMonitorIDSecurity 
    
}

type CompanyMonitorIDResponse struct {
    CompanyMonitorID200ApplicationJSONAnies []interface{} 
    CompanyMonitorIDDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

