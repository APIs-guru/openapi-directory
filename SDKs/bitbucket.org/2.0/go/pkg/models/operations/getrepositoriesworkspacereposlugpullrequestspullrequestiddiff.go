package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffPathParams 
    Security GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse struct {
    ContentType string 
    StatusCode int64 
    
}

