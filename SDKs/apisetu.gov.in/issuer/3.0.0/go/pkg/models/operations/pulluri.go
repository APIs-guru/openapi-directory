package operations

type PullURIHeaders struct {
	ContentType     *string `header:"name=Content-Type"`
	XDigilockerHmac *string `header:"name=x-digilocker-hmac"`
}

type PullURIRequest struct {
	Headers PullURIHeaders
	Request []byte `request:"mediaType=application/xml"`
}

type PullURIResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
