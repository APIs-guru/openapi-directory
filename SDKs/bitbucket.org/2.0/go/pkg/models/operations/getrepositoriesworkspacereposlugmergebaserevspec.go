package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Revspec string `pathParam:"style=simple,explode=false,name=revspec"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams 
    Security GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse struct {
    ContentType string 
    StatusCode int64 
    Commit map[string]interface{} 
    Error map[string]interface{} 
    
}

