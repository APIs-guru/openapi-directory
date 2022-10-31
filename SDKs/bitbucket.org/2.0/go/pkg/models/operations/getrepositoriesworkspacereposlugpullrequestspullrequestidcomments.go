package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedPullrequestComments *shared.PaginatedPullrequestComments 
    
}

