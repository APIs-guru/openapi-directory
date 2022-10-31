package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileMigrationsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFileMigrationsIDRequest struct {
	PathParams GetFileMigrationsIDPathParams
}

type GetFileMigrationsIDResponse struct {
	ContentType         string
	FileMigrationEntity *shared.FileMigrationEntity
	StatusCode          int64
}
