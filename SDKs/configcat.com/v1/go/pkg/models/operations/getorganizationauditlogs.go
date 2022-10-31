package operations

import (
"time"
"openapi/pkg/models/shared")

type GetOrganizationAuditlogsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationAuditlogsQueryParams struct {
    AuditLogType map[string]interface{} `queryParam:"style=form,explode=true,name=auditLogType"`
    ConfigID *string `queryParam:"style=form,explode=true,name=configId"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=environmentId"`
    FromUtcDateTime *time.Time `queryParam:"style=form,explode=true,name=fromUtcDateTime"`
    ProductID *string `queryParam:"style=form,explode=true,name=productId"`
    ToUtcDateTime *time.Time `queryParam:"style=form,explode=true,name=toUtcDateTime"`
    
}

type GetOrganizationAuditlogsRequest struct {
    PathParams GetOrganizationAuditlogsPathParams 
    QueryParams GetOrganizationAuditlogsQueryParams 
    
}

type GetOrganizationAuditlogsResponse struct {
    AuditLogItemModels []shared.AuditLogItemModel 
    ContentType string 
    StatusCode int64 
    
}

