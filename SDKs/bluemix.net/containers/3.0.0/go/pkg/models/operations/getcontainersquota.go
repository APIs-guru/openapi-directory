package operations

type GetContainersQuotaHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetContainersQuotaRequest struct {
	Headers GetContainersQuotaHeaders
}

type GetContainersQuotaResponse struct {
	ContainersQuotaInfo *interface{}
	ContentType         string
	StatusCode          int64
}
