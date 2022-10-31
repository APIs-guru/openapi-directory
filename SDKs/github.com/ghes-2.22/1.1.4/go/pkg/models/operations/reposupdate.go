package operations

import (
"openapi/pkg/models/shared")

type ReposUpdatePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReposUpdateRequestBodyVisibilityEnum string

const (
    ReposUpdateRequestBodyVisibilityEnumPublic ReposUpdateRequestBodyVisibilityEnum = "public"
ReposUpdateRequestBodyVisibilityEnumPrivate ReposUpdateRequestBodyVisibilityEnum = "private"
ReposUpdateRequestBodyVisibilityEnumVisibility ReposUpdateRequestBodyVisibilityEnum = "visibility"
ReposUpdateRequestBodyVisibilityEnumInternal ReposUpdateRequestBodyVisibilityEnum = "internal"
)


type ReposUpdateRequestBody struct {
    AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
    AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
    AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
    Archived *bool `json:"archived,omitempty"`
    DefaultBranch *string `json:"default_branch,omitempty"`
    DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
    Description *string `json:"description,omitempty"`
    HasIssues *bool `json:"has_issues,omitempty"`
    HasProjects *bool `json:"has_projects,omitempty"`
    HasWiki *bool `json:"has_wiki,omitempty"`
    Homepage *string `json:"homepage,omitempty"`
    IsTemplate *bool `json:"is_template,omitempty"`
    Name *string `json:"name,omitempty"`
    Private *bool `json:"private,omitempty"`
    Visibility *ReposUpdateRequestBodyVisibilityEnum `json:"visibility,omitempty"`
    
}

type ReposUpdateRequest struct {
    PathParams ReposUpdatePathParams 
    Request *ReposUpdateRequestBody `request:"mediaType=application/json"`
    
}

type ReposUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    FullRepository *shared.FullRepository 
    ValidationError *shared.ValidationError 
    
}

