package operations

type DeleteDNSDomainNameRecordsRecordIDPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	RecordID   string `pathParam:"style=simple,explode=false,name=recordId"`
}

type DeleteDNSDomainNameRecordsRecordIDQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
	RecordID   string `queryParam:"style=form,explode=true,name=record_id"`
}

type DeleteDNSDomainNameRecordsRecordIDRequest struct {
	PathParams  DeleteDNSDomainNameRecordsRecordIDPathParams
	QueryParams DeleteDNSDomainNameRecordsRecordIDQueryParams
}

type DeleteDNSDomainNameRecordsRecordIDResponse struct {
	ContentType string
	StatusCode  int64
}
