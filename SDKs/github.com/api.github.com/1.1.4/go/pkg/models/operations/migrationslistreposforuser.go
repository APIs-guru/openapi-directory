package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsListReposForUserPathParams struct {
	MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
}

type MigrationsListReposForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type MigrationsListReposForUserRequest struct {
	PathParams  MigrationsListReposForUserPathParams
	QueryParams MigrationsListReposForUserQueryParams
}

type MigrationsListReposForUserResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	BasicError          *shared.BasicError
	MinimalRepositories []shared.MinimalRepository
}
