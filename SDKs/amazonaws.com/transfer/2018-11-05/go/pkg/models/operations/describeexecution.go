package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExecutionXAmzTargetEnum string

const (
	DescribeExecutionXAmzTargetEnumTransferServiceDescribeExecution DescribeExecutionXAmzTargetEnum = "TransferService.DescribeExecution"
)

type DescribeExecutionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
