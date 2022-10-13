package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsStartImportPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsStartImportRequestBodyVcsEnum string

const (
	MigrationsStartImportRequestBodyVcsEnumSubversion MigrationsStartImportRequestBodyVcsEnum = "subversion"
	MigrationsStartImportRequestBodyVcsEnumGit        MigrationsStartImportRequestBodyVcsEnum = "git"
	MigrationsStartImportRequestBodyVcsEnumMercurial  MigrationsStartImportRequestBodyVcsEnum = "mercurial"
	MigrationsStartImportRequestBodyVcsEnumTfvc       MigrationsStartImportRequestBodyVcsEnum = "tfvc"
)

type MigrationsStartImportRequestBody struct {
	TfvcProject *string                                  `json:"tfvc_project"`
	Vcs         *MigrationsStartImportRequestBodyVcsEnum `json:"vcs"`
	VcsPassword *string                                  `json:"vcs_password"`
	VcsURL      string                                   `json:"vcs_url"`
	VcsUsername *string                                  `json:"vcs_username"`
}

type MigrationsStartImportRequest struct {
	PathParams MigrationsStartImportPathParams
	Request    *MigrationsStartImportRequestBody `request:"mediaType=application/json"`
}

type MigrationsStartImportResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Import          *shared.Import
	ValidationError *shared.ValidationError
}
