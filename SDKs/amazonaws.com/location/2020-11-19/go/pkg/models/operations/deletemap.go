package operations

type DeleteMapPathParams struct {
	MapName string `pathParam:"style=simple,explode=false,name=MapName"`
}

type DeleteMapHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteMapRequest struct {
	PathParams DeleteMapPathParams
	Headers    DeleteMapHeaders
}

type DeleteMapResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteMapResponse         map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
