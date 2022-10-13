package operations

type DeleteCanaryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCanaryRequest struct {
	PathParams DeleteCanaryPathParams
	Headers    DeleteCanaryHeaders
}

type DeleteCanaryResponse struct {
	ConflictException         *interface{}
	ContentType               string
	DeleteCanaryResponse      map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
