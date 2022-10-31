package operations

type PostContainersNameOrIDFloatingIpsIPUnbindPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=ip"`
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDFloatingIpsIPUnbindHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PostContainersNameOrIDFloatingIpsIPUnbindRequest struct {
	PathParams PostContainersNameOrIDFloatingIpsIPUnbindPathParams
	Headers    PostContainersNameOrIDFloatingIpsIPUnbindHeaders
}

type PostContainersNameOrIDFloatingIpsIPUnbindResponse struct {
	ContentType string
	StatusCode  int64
}
