package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkflowTypeXAmzTargetEnum string

const (
	DescribeWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceDescribeWorkflowType DescribeWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.DescribeWorkflowType"
)

type DescribeWorkflowTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkflowTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
