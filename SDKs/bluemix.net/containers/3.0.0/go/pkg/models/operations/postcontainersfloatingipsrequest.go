package operations

type PostContainersFloatingIpsRequestHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersFloatingIpsRequestRequest struct {
	Headers PostContainersFloatingIpsRequestHeaders
}

type PostContainersFloatingIpsRequestResponse struct {
	ContentType                                              string
	PostContainersFloatingIpsRequest200ApplicationJSONString *string
	StatusCode                                               int64
}
