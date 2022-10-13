package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRouteCalculatorPathParams struct {
	CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
}

type DescribeRouteCalculatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRouteCalculatorRequest struct {
	PathParams DescribeRouteCalculatorPathParams
	Headers    DescribeRouteCalculatorHeaders
}

type DescribeRouteCalculatorResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeRouteCalculatorResponse *shared.DescribeRouteCalculatorResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
