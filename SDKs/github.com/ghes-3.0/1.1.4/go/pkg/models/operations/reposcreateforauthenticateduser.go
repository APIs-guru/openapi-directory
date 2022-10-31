package operations

import (
"openapi/pkg/models/shared")

type ReposCreateForAuthenticatedUserRequestBody struct {
    AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
    AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
    AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
    AutoInit *bool `json:"auto_init,omitempty"`
    DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
    Description *string `json:"description,omitempty"`
    GitignoreTemplate *string `json:"gitignore_template,omitempty"`
    HasDownloads *bool `json:"has_downloads,omitempty"`
    HasIssues *bool `json:"has_issues,omitempty"`
    HasProjects *bool `json:"has_projects,omitempty"`
    HasWiki *bool `json:"has_wiki,omitempty"`
    Homepage *string `json:"homepage,omitempty"`
    IsTemplate *bool `json:"is_template,omitempty"`
    LicenseTemplate *string `json:"license_template,omitempty"`
    Name string `json:"name"`
    Private *bool `json:"private,omitempty"`
    TeamID *int64 `json:"team_id,omitempty"`
    
}

type ReposCreateForAuthenticatedUserRequest struct {
    Request *ReposCreateForAuthenticatedUserRequestBody `request:"mediaType=application/json"`
    
}

type ReposCreateForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Repository *shared.Repository 
    ScimError *shared.ScimError 
    ValidationError *shared.ValidationError 
    
}

