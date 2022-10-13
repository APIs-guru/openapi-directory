package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkflowXAmzTargetEnum string

const (
	DescribeWorkflowXAmzTargetEnumTransferServiceDescribeWorkflow DescribeWorkflowXAmzTargetEnum = "TransferService.DescribeWorkflow"
)

type DescribeWorkflowHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkflowRequest struct {
	Headers DescribeWorkflowHeaders
	Request shared.DescribeWorkflowRequest `request:"mediaType=application/json"`
}

type DescribeWorkflowResponse struct {
	ContentType                 string
	DescribeWorkflowResponse    *shared.DescribeWorkflowResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
