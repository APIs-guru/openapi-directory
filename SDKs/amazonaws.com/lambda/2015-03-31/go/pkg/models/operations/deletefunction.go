package operations

type DeleteFunctionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type DeleteFunctionQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type DeleteFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFunctionRequest struct {
	PathParams  DeleteFunctionPathParams
	QueryParams DeleteFunctionQueryParams
	Headers     DeleteFunctionHeaders
}

type DeleteFunctionResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
