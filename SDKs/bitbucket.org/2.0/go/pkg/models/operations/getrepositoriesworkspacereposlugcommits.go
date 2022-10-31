package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugCommitsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugCommitsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugCommitsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugCommitsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedChangeset *shared.PaginatedChangeset 
    
}

