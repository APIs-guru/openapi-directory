package operations

type GetContainersGroupsHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersGroupsRequest struct {
	Headers GetContainersGroupsHeaders
}

type GetContainersGroupsResponse struct {
	ContainersGroupsGetListItems []interface{}
	ContentType                  string
	StatusCode                   int64
}
