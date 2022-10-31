package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureSMTPDomainPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	Hostname   string `pathParam:"style=simple,explode=false,name=hostname"`
}

type ConfigureSMTPDomainQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ConfigureSMTPDomainRequest struct {
	PathParams  ConfigureSMTPDomainPathParams
	QueryParams ConfigureSMTPDomainQueryParams
	Request     *shared.UpdateSMTPDomainRequest `request:"mediaType=application/json"`
}

type ConfigureSMTPDomainResponse struct {
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	StatusCode         int64
}
