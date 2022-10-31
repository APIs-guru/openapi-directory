package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugWatchersPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugWatchersSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugWatchersPathParams 
    Security GetRepositoriesWorkspaceRepoSlugWatchersSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugWatchersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

