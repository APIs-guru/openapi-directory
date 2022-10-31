package operations

import (
"openapi/pkg/models/shared")

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity struct {
    Option1 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption1 `security:"option"`
    Option2 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption2 `security:"option"`
    Option3 *PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurityOption3 `security:"option"`
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest struct {
    PathParams PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity 
    
}

type PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Pullrequest map[string]interface{} 
    
}

