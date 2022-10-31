package operations

import (
"openapi/pkg/models/shared")

type GetDNSRecordsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetDNSRecordsRequest struct {
    QueryParams GetDNSRecordsQueryParams 
    
}

type GetDNSRecordsResponse struct {
    ContentType string 
    DNSRecordEntities []shared.DNSRecordEntity 
    StatusCode int64 
    
}

