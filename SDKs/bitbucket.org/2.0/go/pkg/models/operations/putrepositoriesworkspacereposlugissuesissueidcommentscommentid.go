package operations

import (
"openapi/pkg/models/shared")

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity struct {
    Option1 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption1 `security:"option"`
    Option2 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption2 `security:"option"`
    Option3 *PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurityOption3 `security:"option"`
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest struct {
    PathParams PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity 
    
}

type PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    IssueComment map[string]interface{} 
    
}

