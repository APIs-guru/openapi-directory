package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMySQLUserPathParams struct {
	DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
}

type CreateMySQLUserQueryParams struct {
	DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
}

type CreateMySQLUserRequest struct {
	PathParams  CreateMySQLUserPathParams
	QueryParams CreateMySQLUserQueryParams
	Request     *shared.CreateMySQLUser `request:"mediaType=application/json"`
}

type CreateMySQLUserResponse struct {
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	StatusCode         int64
}
