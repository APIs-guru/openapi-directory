package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterWorkflowTypeXAmzTargetEnum string

const (
	RegisterWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceRegisterWorkflowType RegisterWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.RegisterWorkflowType"
)

type RegisterWorkflowTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterWorkflowTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
