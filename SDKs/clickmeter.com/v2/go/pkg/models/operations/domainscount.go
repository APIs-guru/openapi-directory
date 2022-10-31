package operations

import (
"openapi/pkg/models/shared")


type DomainsCountTypeEnum string

const (
    DomainsCountTypeEnumSystem DomainsCountTypeEnum = "system"
DomainsCountTypeEnumGo DomainsCountTypeEnum = "go"
DomainsCountTypeEnumPersonal DomainsCountTypeEnum = "personal"
DomainsCountTypeEnumDedicated DomainsCountTypeEnum = "dedicated"
)


type DomainsCountQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Type *DomainsCountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type DomainsCountRequest struct {
    QueryParams DomainsCountQueryParams 
    
}

type DomainsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

