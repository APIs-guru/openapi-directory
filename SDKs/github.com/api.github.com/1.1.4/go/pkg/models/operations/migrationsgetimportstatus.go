package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsGetImportStatusPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsGetImportStatusRequest struct {
	PathParams MigrationsGetImportStatusPathParams
}

type MigrationsGetImportStatusResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Import      *shared.Import
}
