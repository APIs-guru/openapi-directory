package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams 
    Security GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

