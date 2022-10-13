package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateWorkflowTypeXAmzTargetEnum string

const (
	DeprecateWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceDeprecateWorkflowType DeprecateWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.DeprecateWorkflowType"
)

type DeprecateWorkflowTypeHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateWorkflowTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeprecateWorkflowTypeRequest struct {
	Headers DeprecateWorkflowTypeHeaders
	Request shared.DeprecateWorkflowTypeInput `request:"mediaType=application/json"`
}

type DeprecateWorkflowTypeResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	TypeDeprecatedFault        *interface{}
	UnknownResourceFault       *interface{}
}
