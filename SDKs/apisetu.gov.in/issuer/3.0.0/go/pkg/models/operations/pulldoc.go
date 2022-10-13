package operations

type PullDocHeaders struct {
	ContentType     *string `header:"name=Content-Type"`
	XDigilockerHmac *string `header:"name=x-digilocker-hmac"`
}

type PullDocRequest struct {
	Headers PullDocHeaders
	Request []byte `request:"mediaType=application/xml"`
}

type PullDocResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
