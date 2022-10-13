package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkflowTypeXAmzTargetEnum string

const (
	DescribeWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceDescribeWorkflowType DescribeWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.DescribeWorkflowType"
)

type DescribeWorkflowTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkflowTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkflowTypeRequest struct {
	Headers DescribeWorkflowTypeHeaders
	Request shared.DescribeWorkflowTypeInput `request:"mediaType=application/json"`
}

type DescribeWorkflowTypeResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowTypeDetail         *shared.WorkflowTypeDetail
}
