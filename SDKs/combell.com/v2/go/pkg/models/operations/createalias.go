package operations

import (
"openapi/pkg/models/shared")

type CreateAliasPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type CreateAliasQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type CreateAliasRequest struct {
    PathParams CreateAliasPathParams 
    QueryParams CreateAliasQueryParams 
    Request *shared.CreateAliasRequest `request:"mediaType=application/json"`
    
}

type CreateAliasResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

