package operations

type GetGroupsNameJSONPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetGroupsNameJSONRequest struct {
	PathParams GetGroupsNameJSONPathParams
}

type GetGroupsNameJSONResponse struct {
	ContentType                            string
	GetGroupsNameJSON200ApplicationJSONAny *interface{}
	StatusCode                             int64
}
