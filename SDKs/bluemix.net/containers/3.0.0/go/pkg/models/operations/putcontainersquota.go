package operations

type PutContainersQuotaHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PutContainersQuotaRequest struct {
	Headers PutContainersQuotaHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type PutContainersQuotaResponse struct {
	ContentType string
	StatusCode  int64
}
