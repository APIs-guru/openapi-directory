package operations

type GetContainersGroupsNameOrIDPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type GetContainersGroupsNameOrIDHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersGroupsNameOrIDRequest struct {
	PathParams GetContainersGroupsNameOrIDPathParams
	Headers    GetContainersGroupsNameOrIDHeaders
}

type GetContainersGroupsNameOrIDResponse struct {
	ContainersGroupsNameOrIDGetDetails *interface{}
	ContentType                        string
	StatusCode                         int64
}
