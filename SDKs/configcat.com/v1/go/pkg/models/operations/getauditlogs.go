package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAuditlogsPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetAuditlogsQueryParams struct {
    AuditLogType map[string]interface{} `queryParam:"style=form,explode=true,name=auditLogType"`
    ConfigID *string `queryParam:"style=form,explode=true,name=configId"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=environmentId"`
    FromUtcDateTime *time.Time `queryParam:"style=form,explode=true,name=fromUtcDateTime"`
    ToUtcDateTime *time.Time `queryParam:"style=form,explode=true,name=toUtcDateTime"`
    
}

type GetAuditlogsRequest struct {
    PathParams GetAuditlogsPathParams 
    QueryParams GetAuditlogsQueryParams 
    
}

type GetAuditlogsResponse struct {
    AuditLogItemModels []shared.AuditLogItemModel 
    ContentType string 
    StatusCode int64 
    
}

