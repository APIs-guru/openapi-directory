package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugPullrequestsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    Pullrequest map[string]interface{} 
    
}

