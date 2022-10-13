package operations

import (
	"openapi/pkg/models/shared"
)

type PostDNSDomainNameRecordsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type PostDNSDomainNameRecordsQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type PostDNSDomainNameRecordsRequest struct {
	PathParams  PostDNSDomainNameRecordsPathParams
	QueryParams PostDNSDomainNameRecordsQueryParams
	Request     *shared.DNSRecord `request:"mediaType=application/json"`
}

type PostDNSDomainNameRecordsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
