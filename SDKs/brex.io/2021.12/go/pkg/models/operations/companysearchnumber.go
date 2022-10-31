package operations

import (
"openapi/pkg/models/shared")

type CompanySearchNumberPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type CompanySearchNumberQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type CompanySearchNumberSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanySearchNumberRequest struct {
    PathParams CompanySearchNumberPathParams 
    QueryParams CompanySearchNumberQueryParams 
    Security CompanySearchNumberSecurity 
    
}

type CompanySearchNumberResponse struct {
    CompanySearchNumber200ApplicationJSONAnies []interface{} 
    CompanySearchNumberDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

