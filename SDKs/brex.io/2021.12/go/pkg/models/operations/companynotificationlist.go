package operations

import (
"openapi/pkg/models/shared")

type CompanyNotificationListSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyNotificationListRequest struct {
    Security CompanyNotificationListSecurity 
    
}

type CompanyNotificationListResponse struct {
    CompanyNotificationList200ApplicationJSONAnies []interface{} 
    CompanyNotificationListDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

