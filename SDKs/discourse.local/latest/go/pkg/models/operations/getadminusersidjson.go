package operations

type GetAdminUsersIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAdminUsersIDJSONRequest struct {
	PathParams GetAdminUsersIDJSONPathParams
}

type GetAdminUsersIDJSONResponse struct {
	ContentType                              string
	GetAdminUsersIDJSON200ApplicationJSONAny *interface{}
	StatusCode                               int64
}
