package operations

import (
"openapi/pkg/models/shared")

type AuditLogGetAuditLogPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type AuditLogGetAuditLogQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    Include *shared.AuditLogIncludeEnum `queryParam:"style=form,explode=true,name=include"`
    Order *shared.AuditLogOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Phrase *string `queryParam:"style=form,explode=true,name=phrase"`
    
}

type AuditLogGetAuditLogRequest struct {
    PathParams AuditLogGetAuditLogPathParams 
    QueryParams AuditLogGetAuditLogQueryParams 
    
}

type AuditLogGetAuditLogResponse struct {
    ContentType string 
    StatusCode int64 
    AuditLogEvents []shared.AuditLogEvent 
    
}

