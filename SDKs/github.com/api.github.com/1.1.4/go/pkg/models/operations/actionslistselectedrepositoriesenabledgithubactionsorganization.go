package operations

import (
"openapi/pkg/models/shared")

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest struct {
    PathParams ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams 
    QueryParams ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams 
    
}

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON struct {
    Repositories []shared.Repository `json:"repositories"`
    TotalCount float64 `json:"total_count"`
    
}

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject *ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON 
    
}

