package operations

import (
	"openapi/pkg/models/shared"
)

type GetDNSDomainNameRecordsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetDNSDomainNameRecordsQueryParams struct {
	DomainName string  `queryParam:"style=form,explode=true,name=domain_name"`
	RecordName *string `queryParam:"style=form,explode=true,name=record_name"`
	Service    *string `queryParam:"style=form,explode=true,name=service"`
	Skip       *int32  `queryParam:"style=form,explode=true,name=skip"`
	Take       *int32  `queryParam:"style=form,explode=true,name=take"`
	Type       *string `queryParam:"style=form,explode=true,name=type"`
}

type GetDNSDomainNameRecordsRequest struct {
	PathParams  GetDNSDomainNameRecordsPathParams
	QueryParams GetDNSDomainNameRecordsQueryParams
}

type GetDNSDomainNameRecordsResponse struct {
	ContentType string
	DNSRecords  []shared.DNSRecord
	Headers     map[string][]string
	StatusCode  int64
}
