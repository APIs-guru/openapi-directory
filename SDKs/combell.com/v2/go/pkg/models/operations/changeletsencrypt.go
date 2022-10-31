package operations

import (
"openapi/pkg/models/shared")

type ChangeLetsEncryptPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    Hostname string `pathParam:"style=simple,explode=false,name=hostname"`
    
}

type ChangeLetsEncryptQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type ChangeLetsEncryptRequest struct {
    PathParams ChangeLetsEncryptPathParams 
    QueryParams ChangeLetsEncryptQueryParams 
    Request *shared.LetsEncryptConfig `request:"mediaType=application/json"`
    
}

type ChangeLetsEncryptResponse struct {
    ContentType string 
    StatusCode int64 
    
}

