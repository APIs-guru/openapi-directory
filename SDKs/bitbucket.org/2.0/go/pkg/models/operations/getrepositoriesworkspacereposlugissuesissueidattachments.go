package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedIssueAttachments *shared.PaginatedIssueAttachments 
    
}

