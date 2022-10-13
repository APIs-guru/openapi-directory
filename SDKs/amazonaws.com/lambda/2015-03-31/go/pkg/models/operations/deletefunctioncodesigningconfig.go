package operations

type DeleteFunctionCodeSigningConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type DeleteFunctionCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFunctionCodeSigningConfigRequest struct {
	PathParams DeleteFunctionCodeSigningConfigPathParams
	Headers    DeleteFunctionCodeSigningConfigHeaders
}

type DeleteFunctionCodeSigningConfigResponse struct {
	CodeSigningConfigNotFoundException *interface{}
	ContentType                        string
	InvalidParameterValueException     *interface{}
	ResourceConflictException          *interface{}
	ResourceNotFoundException          *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
