package operations

type DeleteRouteCalculatorPathParams struct {
	CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
}

type DeleteRouteCalculatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRouteCalculatorRequest struct {
	PathParams DeleteRouteCalculatorPathParams
	Headers    DeleteRouteCalculatorHeaders
}

type DeleteRouteCalculatorResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DeleteRouteCalculatorResponse map[string]interface{}
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
