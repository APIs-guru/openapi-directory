package operations

type GetContainersUsageHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersUsageRequest struct {
	Headers GetContainersUsageHeaders
}

type GetContainersUsageResponse struct {
	ContainersUsageInfo *interface{}
	ContentType         string
	StatusCode          int64
}
