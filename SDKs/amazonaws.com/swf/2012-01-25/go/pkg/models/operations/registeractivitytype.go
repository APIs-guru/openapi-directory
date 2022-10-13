package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterActivityTypeXAmzTargetEnum string

const (
	RegisterActivityTypeXAmzTargetEnumSimpleWorkflowServiceRegisterActivityType RegisterActivityTypeXAmzTargetEnum = "SimpleWorkflowService.RegisterActivityType"
)

type RegisterActivityTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterActivityTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterActivityTypeRequest struct {
	Headers RegisterActivityTypeHeaders
	Request shared.RegisterActivityTypeInput `request:"mediaType=application/json"`
}

type RegisterActivityTypeResponse struct {
	ContentType                string
	LimitExceededFault         *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	TypeAlreadyExistsFault     *interface{}
	UnknownResourceFault       *interface{}
}
