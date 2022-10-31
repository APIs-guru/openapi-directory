package operations

import (
"openapi/pkg/models/shared")

type ConfigureAntiSpamPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type ConfigureAntiSpamQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type ConfigureAntiSpamRequest struct {
    PathParams ConfigureAntiSpamPathParams 
    QueryParams ConfigureAntiSpamQueryParams 
    Request *shared.UpdateAntiSpamRequest `request:"mediaType=application/json"`
    
}

type ConfigureAntiSpamResponse struct {
    ContentType string 
    StatusCode int64 
    
}

