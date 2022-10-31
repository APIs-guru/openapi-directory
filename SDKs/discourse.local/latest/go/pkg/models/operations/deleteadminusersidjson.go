package operations

type DeleteAdminUsersIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAdminUsersIDJSONRequest struct {
	PathParams DeleteAdminUsersIDJSONPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type DeleteAdminUsersIDJSONResponse struct {
	ContentType                                 string
	DeleteAdminUsersIDJSON200ApplicationJSONAny *interface{}
	StatusCode                                  int64
}
