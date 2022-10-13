package operations

type DeleteEnvironmentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type DeleteEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEnvironmentRequest struct {
	PathParams DeleteEnvironmentPathParams
	Headers    DeleteEnvironmentHeaders
}

type DeleteEnvironmentResponse struct {
	ContentType               string
	DeleteEnvironmentOutput   map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
