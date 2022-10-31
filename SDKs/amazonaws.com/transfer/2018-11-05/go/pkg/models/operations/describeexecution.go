package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExecutionXAmzTargetEnum string

const (
	DescribeExecutionXAmzTargetEnumTransferServiceDescribeExecution DescribeExecutionXAmzTargetEnum = "TransferService.DescribeExecution"
)

type DescribeExecutionHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeExecutionRequest struct {
	Headers DescribeExecutionHeaders
	Request shared.DescribeExecutionRequest `request:"mediaType=application/json"`
}

type DescribeExecutionResponse struct {
	ContentType                 string
	DescribeExecutionResponse   *shared.DescribeExecutionResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
