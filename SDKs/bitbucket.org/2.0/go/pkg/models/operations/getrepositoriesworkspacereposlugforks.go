package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugForksPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}


type GetRepositoriesWorkspaceRepoSlugForksRoleEnum string

const (
    GetRepositoriesWorkspaceRepoSlugForksRoleEnumAdmin GetRepositoriesWorkspaceRepoSlugForksRoleEnum = "admin"
GetRepositoriesWorkspaceRepoSlugForksRoleEnumContributor GetRepositoriesWorkspaceRepoSlugForksRoleEnum = "contributor"
GetRepositoriesWorkspaceRepoSlugForksRoleEnumMember GetRepositoriesWorkspaceRepoSlugForksRoleEnum = "member"
GetRepositoriesWorkspaceRepoSlugForksRoleEnumOwner GetRepositoriesWorkspaceRepoSlugForksRoleEnum = "owner"
)


type GetRepositoriesWorkspaceRepoSlugForksQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Role *GetRepositoriesWorkspaceRepoSlugForksRoleEnum `queryParam:"style=form,explode=true,name=role"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugForksSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugForksSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugForksSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugForksSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugForksSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugForksSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugForksSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugForksRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugForksPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugForksQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugForksSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugForksResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedRepositories *shared.PaginatedRepositories 
    
}

