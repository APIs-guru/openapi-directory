package operations

type DeleteGroupsIDMembersJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteGroupsIDMembersJSONRequest struct {
	PathParams DeleteGroupsIDMembersJSONPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type DeleteGroupsIDMembersJSONResponse struct {
	ContentType                                    string
	DeleteGroupsIDMembersJSON200ApplicationJSONAny *interface{}
	StatusCode                                     int64
}
