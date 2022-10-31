package operations

import (
"openapi/pkg/models/shared")

type GetSiteDNSRecordsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetSiteDNSRecordsRequest struct {
    QueryParams GetSiteDNSRecordsQueryParams 
    
}

type GetSiteDNSRecordsResponse struct {
    ContentType string 
    DNSRecordEntities []shared.DNSRecordEntity 
    StatusCode int64 
    
}

