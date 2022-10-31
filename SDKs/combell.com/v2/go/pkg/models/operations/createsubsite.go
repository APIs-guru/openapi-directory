package operations

import (
"openapi/pkg/models/shared")

type CreateSubsitePathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type CreateSubsiteQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type CreateSubsiteRequest struct {
    PathParams CreateSubsitePathParams 
    QueryParams CreateSubsiteQueryParams 
    Request *shared.AddSubsiteRequest `request:"mediaType=application/json"`
    
}

type CreateSubsiteResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

