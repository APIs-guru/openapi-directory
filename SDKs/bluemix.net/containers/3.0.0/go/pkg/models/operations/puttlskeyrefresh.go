package operations

type PutTlskeyRefreshHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PutTlskeyRefreshRequest struct {
	Headers PutTlskeyRefreshHeaders
}

type PutTlskeyRefreshResponse struct {
	CertificateRefresh *interface{}
	ContentType        string
	StatusCode         int64
}
