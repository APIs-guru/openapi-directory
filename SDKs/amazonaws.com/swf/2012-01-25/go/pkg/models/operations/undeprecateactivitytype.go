package operations

import (
	"openapi/pkg/models/shared"
)

type UndeprecateActivityTypeXAmzTargetEnum string

const (
	UndeprecateActivityTypeXAmzTargetEnumSimpleWorkflowServiceUndeprecateActivityType UndeprecateActivityTypeXAmzTargetEnum = "SimpleWorkflowService.UndeprecateActivityType"
)

type UndeprecateActivityTypeHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UndeprecateActivityTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
