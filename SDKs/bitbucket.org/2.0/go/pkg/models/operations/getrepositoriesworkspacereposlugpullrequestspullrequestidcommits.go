package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

