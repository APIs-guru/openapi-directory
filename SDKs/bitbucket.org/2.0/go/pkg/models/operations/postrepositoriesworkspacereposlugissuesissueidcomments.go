package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams struct {
    IssueID string `pathParam:"style=simple,explode=false,name=issue_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

