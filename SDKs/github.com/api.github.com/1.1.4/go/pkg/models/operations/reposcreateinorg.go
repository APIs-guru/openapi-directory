package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateInOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ReposCreateInOrgRequestBodyVisibilityEnum string

const (
	ReposCreateInOrgRequestBodyVisibilityEnumPublic     ReposCreateInOrgRequestBodyVisibilityEnum = "public"
	ReposCreateInOrgRequestBodyVisibilityEnumPrivate    ReposCreateInOrgRequestBodyVisibilityEnum = "private"
	ReposCreateInOrgRequestBodyVisibilityEnumVisibility ReposCreateInOrgRequestBodyVisibilityEnum = "visibility"
	ReposCreateInOrgRequestBodyVisibilityEnumInternal   ReposCreateInOrgRequestBodyVisibilityEnum = "internal"
)

type ReposCreateInOrgRequestBody struct {
	AllowMergeCommit    *bool                                      `json:"allow_merge_commit"`
	AllowRebaseMerge    *bool                                      `json:"allow_rebase_merge"`
	AllowSquashMerge    *bool                                      `json:"allow_squash_merge"`
	AutoInit            *bool                                      `json:"auto_init"`
	DeleteBranchOnMerge *bool                                      `json:"delete_branch_on_merge"`
	Description         *string                                    `json:"description"`
	GitignoreTemplate   *string                                    `json:"gitignore_template"`
	HasIssues           *bool                                      `json:"has_issues"`
	HasProjects         *bool                                      `json:"has_projects"`
	HasWiki             *bool                                      `json:"has_wiki"`
	Homepage            *string                                    `json:"homepage"`
	IsTemplate          *bool                                      `json:"is_template"`
	LicenseTemplate     *string                                    `json:"license_template"`
	Name                string                                     `json:"name"`
	Private             *bool                                      `json:"private"`
	TeamID              *int64                                     `json:"team_id"`
	Visibility          *ReposCreateInOrgRequestBodyVisibilityEnum `json:"visibility"`
}

type ReposCreateInOrgRequest struct {
	PathParams ReposCreateInOrgPathParams
	Request    *ReposCreateInOrgRequestBody `request:"mediaType=application/json"`
}

type ReposCreateInOrgResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Repository      *shared.Repository
	ValidationError *shared.ValidationError
}
