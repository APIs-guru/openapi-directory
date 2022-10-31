package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

