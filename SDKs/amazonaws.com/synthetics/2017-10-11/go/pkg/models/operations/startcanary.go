package operations

type StartCanaryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type StartCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartCanaryRequest struct {
	PathParams StartCanaryPathParams
	Headers    StartCanaryHeaders
}

type StartCanaryResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StartCanaryResponse       map[string]interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
