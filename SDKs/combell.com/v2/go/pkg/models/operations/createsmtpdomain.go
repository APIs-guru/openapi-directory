package operations

import (
"openapi/pkg/models/shared")

type CreateSMTPDomainPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type CreateSMTPDomainQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type CreateSMTPDomainRequest struct {
    PathParams CreateSMTPDomainPathParams 
    QueryParams CreateSMTPDomainQueryParams 
    Request *shared.CreateSMTPDomainRequest `request:"mediaType=application/json"`
    
}

type CreateSMTPDomainResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

