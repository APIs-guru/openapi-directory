package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminListGlobalWebhooksQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type EnterpriseAdminListGlobalWebhooksHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type EnterpriseAdminListGlobalWebhooksRequest struct {
    QueryParams EnterpriseAdminListGlobalWebhooksQueryParams 
    Headers EnterpriseAdminListGlobalWebhooksHeaders 
    
}

type EnterpriseAdminListGlobalWebhooksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GlobalHooks []shared.GlobalHook 
    
}

