package operations

type DeleteAliasPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
	Name         string `pathParam:"style=simple,explode=false,name=Name"`
}

type DeleteAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAliasRequest struct {
	PathParams DeleteAliasPathParams
	Headers    DeleteAliasHeaders
}

type DeleteAliasResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
