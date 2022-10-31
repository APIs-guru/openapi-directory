package operations

type GetGroupsNameMembersJSONPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetGroupsNameMembersJSONRequest struct {
	PathParams GetGroupsNameMembersJSONPathParams
}

type GetGroupsNameMembersJSONResponse struct {
	ContentType                                   string
	GetGroupsNameMembersJSON200ApplicationJSONAny *interface{}
	StatusCode                                    int64
}
