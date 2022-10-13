package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsUpdateImportPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsUpdateImportRequestBody struct {
	TfvcProject *string `json:"tfvc_project"`
	Vcs         *string `json:"vcs"`
	VcsPassword *string `json:"vcs_password"`
	VcsUsername *string `json:"vcs_username"`
}

type MigrationsUpdateImportRequest struct {
	PathParams MigrationsUpdateImportPathParams
	Request    *MigrationsUpdateImportRequestBody `request:"mediaType=application/json"`
}

type MigrationsUpdateImportResponse struct {
	ContentType string
	StatusCode  int64
	Import      *shared.Import
}
