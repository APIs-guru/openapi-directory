package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams 
    Security GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

