package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams struct {
    Async *bool `queryParam:"style=form,explode=true,name=async"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams 
    QueryParams PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Pullrequest map[string]interface{} 
    
}

