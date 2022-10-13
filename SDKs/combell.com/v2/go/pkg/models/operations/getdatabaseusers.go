package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseUsersPathParams struct {
	DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
}

type GetDatabaseUsersQueryParams struct {
	DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
}

type GetDatabaseUsersRequest struct {
	PathParams  GetDatabaseUsersPathParams
	QueryParams GetDatabaseUsersQueryParams
}

type GetDatabaseUsersResponse struct {
	ContentType string
	MySQLUsers  []shared.MySQLUser
	StatusCode  int64
}
