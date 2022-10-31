package operations

import (
"openapi/pkg/models/shared")

type PutDNSDomainNameRecordsRecordIDPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    RecordID string `pathParam:"style=simple,explode=false,name=recordId"`
    
}

type PutDNSDomainNameRecordsRecordIDQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    RecordID string `queryParam:"style=form,explode=true,name=record_id"`
    
}

type PutDNSDomainNameRecordsRecordIDRequest struct {
    PathParams PutDNSDomainNameRecordsRecordIDPathParams 
    QueryParams PutDNSDomainNameRecordsRecordIDQueryParams 
    Request *shared.DNSRecord `request:"mediaType=application/json"`
    
}

type PutDNSDomainNameRecordsRecordIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

