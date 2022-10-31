package operations

type DeleteStreamKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
