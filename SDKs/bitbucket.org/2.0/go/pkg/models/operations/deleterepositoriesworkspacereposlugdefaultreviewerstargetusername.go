package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    TargetUsername string `pathParam:"style=simple,explode=false,name=target_username"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

