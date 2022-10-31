package operations

type GetContainersGroupsHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetContainersGroupsRequest struct {
	Headers GetContainersGroupsHeaders
}

type GetContainersGroupsResponse struct {
	ContainersGroupsGetListItems []interface{}
	ContentType                  string
	StatusCode                   int64
}
