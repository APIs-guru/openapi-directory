package operations

import (
"openapi/pkg/models/shared")

type NifBasicPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    
}

type NifBasicRequestBody struct {
    CompanyAddress *string `form:"name=companyAddress"`
    CompanyName *string `form:"name=companyName"`
    NifNumber string `form:"name=nifNumber"`
    
}

type NifBasicSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NifBasicRequest struct {
    PathParams NifBasicPathParams 
    Request NifBasicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security NifBasicSecurity 
    
}

type NifBasicResponse struct {
    ContentType string 
    NifBasic200ApplicationJSONAny *interface{} 
    NifBasicDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

