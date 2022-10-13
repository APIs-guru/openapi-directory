package operations

import (
	"openapi/pkg/models/shared"
)

type GetDNSDomainNameRecordsRecordIDPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	RecordID   string `pathParam:"style=simple,explode=false,name=recordId"`
}

type GetDNSDomainNameRecordsRecordIDQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
	RecordID   string `queryParam:"style=form,explode=true,name=record_id"`
}

type GetDNSDomainNameRecordsRecordIDRequest struct {
	PathParams  GetDNSDomainNameRecordsRecordIDPathParams
	QueryParams GetDNSDomainNameRecordsRecordIDQueryParams
}

type GetDNSDomainNameRecordsRecordIDResponse struct {
	ContentType string
	DNSRecord   *shared.DNSRecord
	StatusCode  int64
}
