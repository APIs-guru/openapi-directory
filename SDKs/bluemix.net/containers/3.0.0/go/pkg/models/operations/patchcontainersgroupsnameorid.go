package operations

type PatchContainersGroupsNameOrIDPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PatchContainersGroupsNameOrIDHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PatchContainersGroupsNameOrIDRequest struct {
	PathParams PatchContainersGroupsNameOrIDPathParams
	Headers    PatchContainersGroupsNameOrIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PatchContainersGroupsNameOrIDResponse struct {
	ContentType string
	StatusCode  int64
}
