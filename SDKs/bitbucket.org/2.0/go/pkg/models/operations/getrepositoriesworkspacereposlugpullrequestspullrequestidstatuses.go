package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesPathParams struct {
    PullRequestID int64 `pathParam:"style=simple,explode=false,name=pull_request_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedCommitstatuses *shared.PaginatedCommitstatuses 
    
}

