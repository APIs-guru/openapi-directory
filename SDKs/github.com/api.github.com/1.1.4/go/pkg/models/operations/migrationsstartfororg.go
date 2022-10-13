package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsStartForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type MigrationsStartForOrgRequestBody struct {
	Exclude            []string `json:"exclude"`
	ExcludeAttachments *bool    `json:"exclude_attachments"`
	LockRepositories   *bool    `json:"lock_repositories"`
	Repositories       []string `json:"repositories"`
}

type MigrationsStartForOrgRequest struct {
	PathParams MigrationsStartForOrgPathParams
	Request    *MigrationsStartForOrgRequestBody `request:"mediaType=application/json"`
}

type MigrationsStartForOrgResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Migration       *shared.Migration
	ValidationError *shared.ValidationError
}
