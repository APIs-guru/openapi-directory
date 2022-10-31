package operations

import (
"openapi/pkg/models/shared")

type CompanyIDSuperPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type CompanyIDSuperLangEnum string

const (
    CompanyIDSuperLangEnumUnknown CompanyIDSuperLangEnum = ""
CompanyIDSuperLangEnumOg CompanyIDSuperLangEnum = "OG"
CompanyIDSuperLangEnumEn CompanyIDSuperLangEnum = "EN"
)


type CompanyIDSuperQueryParams struct {
    Lang *CompanyIDSuperLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type CompanyIDSuperSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyIDSuperRequest struct {
    PathParams CompanyIDSuperPathParams 
    QueryParams CompanyIDSuperQueryParams 
    Security CompanyIDSuperSecurity 
    
}

type CompanyIDSuperResponse struct {
    CompanyIDSuper200ApplicationJSONAnies []interface{} 
    CompanyIDSuperDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

