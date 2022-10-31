package operations

import (
"openapi/pkg/models/shared")

type NifComprehensivePathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    
}

type NifComprehensiveRequestBody struct {
    CompanyAddress *string `form:"name=companyAddress"`
    CompanyName *string `form:"name=companyName"`
    NifNumber string `form:"name=nifNumber"`
    
}

type NifComprehensiveSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NifComprehensiveRequest struct {
    PathParams NifComprehensivePathParams 
    Request NifComprehensiveRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security NifComprehensiveSecurity 
    
}

type NifComprehensiveResponse struct {
    ContentType string 
    NifComprehensive200ApplicationJSONAny *interface{} 
    NifComprehensiveDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

