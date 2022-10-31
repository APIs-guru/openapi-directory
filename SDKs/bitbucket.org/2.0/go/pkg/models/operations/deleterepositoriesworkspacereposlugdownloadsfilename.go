package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams struct {
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

