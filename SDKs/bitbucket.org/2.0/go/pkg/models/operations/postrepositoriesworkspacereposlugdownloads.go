package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugDownloadsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugDownloadsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugDownloadsPathParams 
    Security PostRepositoriesWorkspaceRepoSlugDownloadsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugDownloadsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

