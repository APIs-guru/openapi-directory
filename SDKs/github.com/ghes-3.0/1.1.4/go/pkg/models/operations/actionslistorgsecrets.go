package operations

import (
"openapi/pkg/models/shared")

type ActionsListOrgSecretsPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ActionsListOrgSecretsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActionsListOrgSecretsRequest struct {
    PathParams ActionsListOrgSecretsPathParams 
    QueryParams ActionsListOrgSecretsQueryParams 
    
}

type ActionsListOrgSecrets200ApplicationJSON struct {
    Secrets []shared.OrganizationActionsSecret `json:"secrets"`
    TotalCount int64 `json:"total_count"`
    
}

type ActionsListOrgSecretsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ActionsListOrgSecrets200ApplicationJSONObject *ActionsListOrgSecrets200ApplicationJSON 
    
}

