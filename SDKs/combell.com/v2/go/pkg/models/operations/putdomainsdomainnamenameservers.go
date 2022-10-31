package operations

import (
	"openapi/pkg/models/shared"
)

type PutDomainsDomainNameNameserversPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type PutDomainsDomainNameNameserversQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type PutDomainsDomainNameNameserversRequest struct {
	PathParams  PutDomainsDomainNameNameserversPathParams
	QueryParams PutDomainsDomainNameNameserversQueryParams
	Request     *shared.EditNameServers `request:"mediaType=application/json"`
}

type PutDomainsDomainNameNameserversResponse struct {
	ContentType string
	StatusCode  int64
}
