package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedLogEntries *shared.PaginatedLogEntries 
    
}

