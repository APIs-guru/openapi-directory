package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspacePathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}


type GetSnippetsWorkspaceRoleEnum string

const (
    GetSnippetsWorkspaceRoleEnumOwner GetSnippetsWorkspaceRoleEnum = "owner"
GetSnippetsWorkspaceRoleEnumContributor GetSnippetsWorkspaceRoleEnum = "contributor"
GetSnippetsWorkspaceRoleEnumMember GetSnippetsWorkspaceRoleEnum = "member"
)


type GetSnippetsWorkspaceQueryParams struct {
    Role *GetSnippetsWorkspaceRoleEnum `queryParam:"style=form,explode=true,name=role"`
    
}

type GetSnippetsWorkspaceSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceSecurity struct {
    Option1 *GetSnippetsWorkspaceSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceRequest struct {
    PathParams GetSnippetsWorkspacePathParams 
    QueryParams GetSnippetsWorkspaceQueryParams 
    Security GetSnippetsWorkspaceSecurity 
    
}

type GetSnippetsWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedSnippets *shared.PaginatedSnippets 
    
}

