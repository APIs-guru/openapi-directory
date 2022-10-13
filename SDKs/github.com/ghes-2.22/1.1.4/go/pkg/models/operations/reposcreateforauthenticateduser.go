package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateForAuthenticatedUserRequestBody struct {
	AllowMergeCommit    *bool   `json:"allow_merge_commit"`
	AllowRebaseMerge    *bool   `json:"allow_rebase_merge"`
	AllowSquashMerge    *bool   `json:"allow_squash_merge"`
	AutoInit            *bool   `json:"auto_init"`
	DeleteBranchOnMerge *bool   `json:"delete_branch_on_merge"`
	Description         *string `json:"description"`
	GitignoreTemplate   *string `json:"gitignore_template"`
	HasDownloads        *bool   `json:"has_downloads"`
	HasIssues           *bool   `json:"has_issues"`
	HasProjects         *bool   `json:"has_projects"`
	HasWiki             *bool   `json:"has_wiki"`
	Homepage            *string `json:"homepage"`
	IsTemplate          *bool   `json:"is_template"`
	LicenseTemplate     *string `json:"license_template"`
	Name                string  `json:"name"`
	Private             *bool   `json:"private"`
	TeamID              *int64  `json:"team_id"`
}

type ReposCreateForAuthenticatedUserRequest struct {
	Request *ReposCreateForAuthenticatedUserRequestBody `request:"mediaType=application/json"`
}

type ReposCreateForAuthenticatedUserResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Repository      *shared.Repository
	ScimError       *shared.ScimError
	ValidationError *shared.ValidationError
}
