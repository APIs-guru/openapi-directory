package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

