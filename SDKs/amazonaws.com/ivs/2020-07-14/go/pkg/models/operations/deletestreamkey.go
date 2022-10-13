package operations

type DeleteStreamKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteStreamKeyRequestBody struct {
	Arn string `json:"arn"`
}

type DeleteStreamKeyRequest struct {
	Headers DeleteStreamKeyHeaders
	Request DeleteStreamKeyRequestBody `request:"mediaType=application/json"`
}

type DeleteStreamKeyResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	PendingVerification       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
