package operations

type PostContainersNameOrIDFloatingIpsIPBindPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=ip"`
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDFloatingIpsIPBindHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersNameOrIDFloatingIpsIPBindRequest struct {
	PathParams PostContainersNameOrIDFloatingIpsIPBindPathParams
	Headers    PostContainersNameOrIDFloatingIpsIPBindHeaders
}

type PostContainersNameOrIDFloatingIpsIPBindResponse struct {
	ContentType string
	StatusCode  int64
}
