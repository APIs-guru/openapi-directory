package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprovePathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

