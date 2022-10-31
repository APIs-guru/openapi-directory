package operations

type DeleteAdminGroupsIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAdminGroupsIDJSONRequest struct {
	PathParams DeleteAdminGroupsIDJSONPathParams
}

type DeleteAdminGroupsIDJSONResponse struct {
	ContentType                                  string
	DeleteAdminGroupsIDJSON200ApplicationJSONAny *interface{}
	StatusCode                                   int64
}
