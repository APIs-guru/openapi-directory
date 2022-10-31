package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsGetStatusForAuthenticatedUserPathParams struct {
	MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
}

type MigrationsGetStatusForAuthenticatedUserQueryParams struct {
	Exclude []string `queryParam:"style=form,explode=true,name=exclude"`
}

type MigrationsGetStatusForAuthenticatedUserRequest struct {
	PathParams  MigrationsGetStatusForAuthenticatedUserPathParams
	QueryParams MigrationsGetStatusForAuthenticatedUserQueryParams
}

type MigrationsGetStatusForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Migration   *shared.Migration
}
