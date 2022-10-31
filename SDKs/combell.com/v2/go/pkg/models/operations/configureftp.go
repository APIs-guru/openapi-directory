package operations

import (
"openapi/pkg/models/shared")

type ConfigureFtpPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type ConfigureFtpQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type ConfigureFtpRequest struct {
    PathParams ConfigureFtpPathParams 
    QueryParams ConfigureFtpQueryParams 
    Request *shared.FtpConfiguration `request:"mediaType=application/json"`
    
}

type ConfigureFtpResponse struct {
    ContentType string 
    StatusCode int64 
    
}

