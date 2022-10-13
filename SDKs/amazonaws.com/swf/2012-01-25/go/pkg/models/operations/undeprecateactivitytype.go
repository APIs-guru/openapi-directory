package operations

import (
	"openapi/pkg/models/shared"
)

type UndeprecateActivityTypeXAmzTargetEnum string

const (
	UndeprecateActivityTypeXAmzTargetEnumSimpleWorkflowServiceUndeprecateActivityType UndeprecateActivityTypeXAmzTargetEnum = "SimpleWorkflowService.UndeprecateActivityType"
)

type UndeprecateActivityTypeHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UndeprecateActivityTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UndeprecateActivityTypeRequest struct {
	Headers UndeprecateActivityTypeHeaders
	Request shared.UndeprecateActivityTypeInput `request:"mediaType=application/json"`
}

type UndeprecateActivityTypeResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	TypeAlreadyExistsFault     *interface{}
	UnknownResourceFault       *interface{}
}
