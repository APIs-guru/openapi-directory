package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams 
    Security GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Pullrequest map[string]interface{} 
    
}

