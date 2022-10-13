package operations

type PostContainersFloatingIpsIPReleasePathParams struct {
	IP string `pathParam:"style=simple,explode=false,name=ip"`
}

type PostContainersFloatingIpsIPReleaseHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersFloatingIpsIPReleaseRequest struct {
	PathParams PostContainersFloatingIpsIPReleasePathParams
	Headers    PostContainersFloatingIpsIPReleaseHeaders
}

type PostContainersFloatingIpsIPReleaseResponse struct {
	ContentType string
	StatusCode  int64
}
