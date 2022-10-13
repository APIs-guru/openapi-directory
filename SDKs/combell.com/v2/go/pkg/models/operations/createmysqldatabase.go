package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMySQLDatabaseRequest struct {
	Request *shared.CreateMySQLDatabase `request:"mediaType=application/json"`
}

type CreateMySQLDatabaseResponse struct {
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	StatusCode         int64
}
