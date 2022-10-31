package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkflowExecutionXAmzTargetEnum string

const (
	DescribeWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceDescribeWorkflowExecution DescribeWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.DescribeWorkflowExecution"
)

type DescribeWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkflowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
