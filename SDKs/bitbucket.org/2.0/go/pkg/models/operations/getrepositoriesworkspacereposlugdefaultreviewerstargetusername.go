package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    TargetUsername string `pathParam:"style=simple,explode=false,name=target_username"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams 
    Security GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

