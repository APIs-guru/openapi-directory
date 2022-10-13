package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHumanLoopPathParams struct {
	HumanLoopName string `pathParam:"style=simple,explode=false,name=HumanLoopName"`
}

type DescribeHumanLoopHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeHumanLoopRequest struct {
	PathParams DescribeHumanLoopPathParams
	Headers    DescribeHumanLoopHeaders
}

type DescribeHumanLoopResponse struct {
	ContentType               string
	DescribeHumanLoopResponse *shared.DescribeHumanLoopResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
