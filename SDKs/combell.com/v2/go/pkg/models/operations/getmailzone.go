package operations

import (
"openapi/pkg/models/shared")

type GetMailZonePathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type GetMailZoneQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type GetMailZoneRequest struct {
    PathParams GetMailZonePathParams 
    QueryParams GetMailZoneQueryParams 
    
}

type GetMailZoneResponse struct {
    ContentType string 
    MailZone *shared.MailZone 
    StatusCode int64 
    
}

