package operations

import (
"openapi/pkg/models/shared")

type CompanyDeepsearchIsinRequestBody struct {
    Isin *string `form:"name=isin"`
    
}

type CompanyDeepsearchIsinSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyDeepsearchIsinRequest struct {
    Request *CompanyDeepsearchIsinRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CompanyDeepsearchIsinSecurity 
    
}

type CompanyDeepsearchIsinResponse struct {
    CompanyDeepsearchIsin200ApplicationJSONAnies []interface{} 
    CompanyDeepsearchIsinDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

