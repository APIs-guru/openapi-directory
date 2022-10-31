package operations

import (
"openapi/pkg/models/shared")

type ConfigureDomainPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type ConfigureDomainQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type ConfigureDomainRequest struct {
    PathParams ConfigureDomainPathParams 
    QueryParams ConfigureDomainQueryParams 
    Request *shared.EditDomainWillRenewRequest `request:"mediaType=application/json"`
    
}

type ConfigureDomainResponse struct {
    ContentType string 
    StatusCode int64 
    
}

