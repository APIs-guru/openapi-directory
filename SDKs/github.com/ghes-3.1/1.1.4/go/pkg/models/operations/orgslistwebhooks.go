package operations

import (
"openapi/pkg/models/shared")

type OrgsListWebhooksPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsListWebhooksQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type OrgsListWebhooksRequest struct {
    PathParams OrgsListWebhooksPathParams 
    QueryParams OrgsListWebhooksQueryParams 
    
}

type OrgsListWebhooksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    OrgHooks []shared.OrgHook 
    
}

