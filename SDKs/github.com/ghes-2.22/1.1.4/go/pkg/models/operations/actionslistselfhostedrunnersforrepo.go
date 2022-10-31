package operations

import (
"openapi/pkg/models/shared")

type ActionsListSelfHostedRunnersForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsListSelfHostedRunnersForRepoQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActionsListSelfHostedRunnersForRepoRequest struct {
    PathParams ActionsListSelfHostedRunnersForRepoPathParams 
    QueryParams ActionsListSelfHostedRunnersForRepoQueryParams 
    
}

type ActionsListSelfHostedRunnersForRepo200ApplicationJSON struct {
    Runners []shared.RunnerNoLabels `json:"runners"`
    TotalCount float64 `json:"total_count"`
    
}

type ActionsListSelfHostedRunnersForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ActionsListSelfHostedRunnersForRepo200ApplicationJSONObject *ActionsListSelfHostedRunnersForRepo200ApplicationJSON 
    
}

