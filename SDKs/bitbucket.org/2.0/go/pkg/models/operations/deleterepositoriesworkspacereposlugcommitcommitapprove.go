package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

