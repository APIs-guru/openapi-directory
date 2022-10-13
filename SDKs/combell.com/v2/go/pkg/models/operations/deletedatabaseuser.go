package operations

type DeleteDatabaseUserPathParams struct {
	DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
	UserName     string `pathParam:"style=simple,explode=false,name=userName"`
}

type DeleteDatabaseUserQueryParams struct {
	DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
	UserName     string `queryParam:"style=form,explode=true,name=user_name"`
}

type DeleteDatabaseUserRequest struct {
	PathParams  DeleteDatabaseUserPathParams
	QueryParams DeleteDatabaseUserQueryParams
}

type DeleteDatabaseUserResponse struct {
	ContentType string
	StatusCode  int64
}
