package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterActivityTypeXAmzTargetEnum string

const (
	RegisterActivityTypeXAmzTargetEnumSimpleWorkflowServiceRegisterActivityType RegisterActivityTypeXAmzTargetEnum = "SimpleWorkflowService.RegisterActivityType"
)

type RegisterActivityTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterActivityTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
