package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDPathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

