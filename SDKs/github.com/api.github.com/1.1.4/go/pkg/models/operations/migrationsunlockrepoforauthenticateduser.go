package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsUnlockRepoForAuthenticatedUserPathParams struct {
	MigrationID int64  `pathParam:"style=simple,explode=false,name=migration_id"`
	RepoName    string `pathParam:"style=simple,explode=false,name=repo_name"`
}

type MigrationsUnlockRepoForAuthenticatedUserRequest struct {
	PathParams MigrationsUnlockRepoForAuthenticatedUserPathParams
}

type MigrationsUnlockRepoForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
