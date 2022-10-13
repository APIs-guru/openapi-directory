package operations

type GetContainersFloatingIpsQueryParams struct {
	All *bool `queryParam:"style=form,explode=true,name=all"`
}

type GetContainersFloatingIpsHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersFloatingIpsRequest struct {
	QueryParams GetContainersFloatingIpsQueryParams
	Headers     GetContainersFloatingIpsHeaders
}

type GetContainersFloatingIpsResponse struct {
	ContentType string
	FloatingIps []interface{}
	StatusCode  int64
}
