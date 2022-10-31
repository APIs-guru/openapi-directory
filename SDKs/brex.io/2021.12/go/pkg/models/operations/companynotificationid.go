package operations

import (
"openapi/pkg/models/shared")

type CompanyNotificationIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CompanyNotificationIDSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyNotificationIDRequest struct {
    PathParams CompanyNotificationIDPathParams 
    Security CompanyNotificationIDSecurity 
    
}

type CompanyNotificationIDResponse struct {
    CompanyNotificationID200ApplicationJSONAnies []interface{} 
    CompanyNotificationIDDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

