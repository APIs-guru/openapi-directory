package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugDownloadsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugDownloadsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugDownloadsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugDownloadsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugDownloadsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

