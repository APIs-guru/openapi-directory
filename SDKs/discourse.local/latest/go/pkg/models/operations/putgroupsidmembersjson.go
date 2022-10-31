package operations

type PutGroupsIDMembersJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutGroupsIDMembersJSONRequest struct {
	PathParams PutGroupsIDMembersJSONPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PutGroupsIDMembersJSONResponse struct {
	ContentType                                 string
	PutGroupsIDMembersJSON200ApplicationJSONAny *interface{}
	StatusCode                                  int64
}
