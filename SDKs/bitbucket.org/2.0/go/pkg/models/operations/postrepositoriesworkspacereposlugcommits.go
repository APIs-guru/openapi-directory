package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugCommitsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugCommitsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugCommitsPathParams 
    Security PostRepositoriesWorkspaceRepoSlugCommitsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugCommitsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedChangeset *shared.PaginatedChangeset 
    
}

