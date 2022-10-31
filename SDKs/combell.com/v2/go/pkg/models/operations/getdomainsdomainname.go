package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsDomainNamePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetDomainsDomainNameQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type GetDomainsDomainNameRequest struct {
	PathParams  GetDomainsDomainNamePathParams
	QueryParams GetDomainsDomainNameQueryParams
}

type GetDomainsDomainNameResponse struct {
	ContentType  string
	DomainDetail *shared.DomainDetail
	StatusCode   int64
}
