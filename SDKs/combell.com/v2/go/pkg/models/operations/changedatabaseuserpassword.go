package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeDatabaseUserPasswordPathParams struct {
	DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
	UserName     string `pathParam:"style=simple,explode=false,name=userName"`
}

type ChangeDatabaseUserPasswordQueryParams struct {
	DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
	UserName     string `queryParam:"style=form,explode=true,name=user_name"`
}

type ChangeDatabaseUserPasswordRequest struct {
	PathParams  ChangeDatabaseUserPasswordPathParams
	QueryParams ChangeDatabaseUserPasswordQueryParams
	Request     *shared.UpdateUserPasswordRequest `request:"mediaType=application/json"`
}

type ChangeDatabaseUserPasswordResponse struct {
	ContentType string
	StatusCode  int64
}
