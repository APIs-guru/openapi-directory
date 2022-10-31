package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse struct {
    ContentType string 
    StatusCode int64 
    Commitstatus map[string]interface{} 
    Error map[string]interface{} 
    
}

