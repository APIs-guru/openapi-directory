package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugCommitCommitSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams 
    Security GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugCommitCommitResponse struct {
    ContentType string 
    StatusCode int64 
    Commit map[string]interface{} 
    Error map[string]interface{} 
    
}

