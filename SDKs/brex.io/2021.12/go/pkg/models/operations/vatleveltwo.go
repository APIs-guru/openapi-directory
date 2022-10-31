package operations

import (
"openapi/pkg/models/shared")

type VatLevelTwoPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    
}

type VatLevelTwoRequestBody struct {
    Confirmation *bool `form:"name=confirmation"`
    VatNumber string `form:"name=vatNumber"`
    
}

type VatLevelTwoSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type VatLevelTwoRequest struct {
    PathParams VatLevelTwoPathParams 
    Request VatLevelTwoRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security VatLevelTwoSecurity 
    
}

type VatLevelTwoResponse struct {
    ContentType string 
    StatusCode int64 
    VatLevelTwo200ApplicationJSONAny *interface{} 
    VatLevelTwoDefaultApplicationJSONAny *interface{} 
    
}

