package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams 
    Security PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Participant map[string]interface{} 
    
}

