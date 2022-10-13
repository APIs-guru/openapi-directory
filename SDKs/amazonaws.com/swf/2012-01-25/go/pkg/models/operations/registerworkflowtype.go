package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterWorkflowTypeXAmzTargetEnum string

const (
	RegisterWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceRegisterWorkflowType RegisterWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.RegisterWorkflowType"
)

type RegisterWorkflowTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterWorkflowTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterWorkflowTypeRequest struct {
	Headers RegisterWorkflowTypeHeaders
	Request shared.RegisterWorkflowTypeInput `request:"mediaType=application/json"`
}

type RegisterWorkflowTypeResponse struct {
	ContentType                string
	LimitExceededFault         *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	TypeAlreadyExistsFault     *interface{}
	UnknownResourceFault       *interface{}
}
