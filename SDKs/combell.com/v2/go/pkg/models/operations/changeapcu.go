package operations

import (
"openapi/pkg/models/shared")

type ChangeApcuPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type ChangeApcuQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type ChangeApcuRequest struct {
    PathParams ChangeApcuPathParams 
    QueryParams ChangeApcuQueryParams 
    Request *shared.UpdatePhpAPcuRequest `request:"mediaType=application/json"`
    
}

type ChangeApcuResponse struct {
    ContentType string 
    StatusCode int64 
    
}

