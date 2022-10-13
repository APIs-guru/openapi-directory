package operations

type DeleteProvisionedConcurrencyConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type DeleteProvisionedConcurrencyConfigQueryParams struct {
	Qualifier string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type DeleteProvisionedConcurrencyConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProvisionedConcurrencyConfigRequest struct {
	PathParams  DeleteProvisionedConcurrencyConfigPathParams
	QueryParams DeleteProvisionedConcurrencyConfigQueryParams
	Headers     DeleteProvisionedConcurrencyConfigHeaders
}

type DeleteProvisionedConcurrencyConfigResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
