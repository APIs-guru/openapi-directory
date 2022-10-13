package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdatePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateRequestBodyVisibilityEnum string

const (
	ReposUpdateRequestBodyVisibilityEnumPublic     ReposUpdateRequestBodyVisibilityEnum = "public"
	ReposUpdateRequestBodyVisibilityEnumPrivate    ReposUpdateRequestBodyVisibilityEnum = "private"
	ReposUpdateRequestBodyVisibilityEnumVisibility ReposUpdateRequestBodyVisibilityEnum = "visibility"
	ReposUpdateRequestBodyVisibilityEnumInternal   ReposUpdateRequestBodyVisibilityEnum = "internal"
)

type ReposUpdateRequestBody struct {
	AllowMergeCommit    *bool                                 `json:"allow_merge_commit"`
	AllowRebaseMerge    *bool                                 `json:"allow_rebase_merge"`
	AllowSquashMerge    *bool                                 `json:"allow_squash_merge"`
	Archived            *bool                                 `json:"archived"`
	DefaultBranch       *string                               `json:"default_branch"`
	DeleteBranchOnMerge *bool                                 `json:"delete_branch_on_merge"`
	Description         *string                               `json:"description"`
	HasIssues           *bool                                 `json:"has_issues"`
	HasProjects         *bool                                 `json:"has_projects"`
	HasWiki             *bool                                 `json:"has_wiki"`
	Homepage            *string                               `json:"homepage"`
	IsTemplate          *bool                                 `json:"is_template"`
	Name                *string                               `json:"name"`
	Private             *bool                                 `json:"private"`
	Visibility          *ReposUpdateRequestBodyVisibilityEnum `json:"visibility"`
}

type ReposUpdateRequest struct {
	PathParams ReposUpdatePathParams
	Request    *ReposUpdateRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	FullRepository  *shared.FullRepository
	ValidationError *shared.ValidationError
}
