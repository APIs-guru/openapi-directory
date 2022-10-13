package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkflowExecutionXAmzTargetEnum string

const (
	DescribeWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceDescribeWorkflowExecution DescribeWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.DescribeWorkflowExecution"
)

type DescribeWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkflowExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkflowExecutionRequest struct {
	Headers DescribeWorkflowExecutionHeaders
	Request shared.DescribeWorkflowExecutionInput `request:"mediaType=application/json"`
}

type DescribeWorkflowExecutionResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowExecutionDetail    *shared.WorkflowExecutionDetail
}
