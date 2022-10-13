package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum string

const (
	MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum = "repositories"
)

type MigrationsStartForAuthenticatedUserRequestBody struct {
	Exclude            []MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum `json:"exclude"`
	ExcludeAttachments *bool                                                       `json:"exclude_attachments"`
	LockRepositories   *bool                                                       `json:"lock_repositories"`
	Repositories       []string                                                    `json:"repositories"`
}

type MigrationsStartForAuthenticatedUserRequest struct {
	Request *MigrationsStartForAuthenticatedUserRequestBody `request:"mediaType=application/json"`
}

type MigrationsStartForAuthenticatedUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Migration       *shared.Migration
	ValidationError *shared.ValidationError
}
