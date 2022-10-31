package operations

import (
"openapi/pkg/models/shared")

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity struct {
    Option1 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption1 `security:"option"`
    Option2 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption2 `security:"option"`
    Option3 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurityOption3 `security:"option"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest struct {
    PathParams PutRepositoriesWorkspaceRepoSlugIssuesIssueIDPathParams 
    Security PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity 
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Issue map[string]interface{} 
    
}

