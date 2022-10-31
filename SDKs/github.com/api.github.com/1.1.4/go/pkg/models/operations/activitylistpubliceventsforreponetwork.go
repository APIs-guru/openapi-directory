package operations

import (
"openapi/pkg/models/shared")

type ActivityListPublicEventsForRepoNetworkPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityListPublicEventsForRepoNetworkQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListPublicEventsForRepoNetworkRequest struct {
    PathParams ActivityListPublicEventsForRepoNetworkPathParams 
    QueryParams ActivityListPublicEventsForRepoNetworkQueryParams 
    
}

type ActivityListPublicEventsForRepoNetworkResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Events []shared.Event 
    
}

