package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateActivityTypeXAmzTargetEnum string

const (
	DeprecateActivityTypeXAmzTargetEnumSimpleWorkflowServiceDeprecateActivityType DeprecateActivityTypeXAmzTargetEnum = "SimpleWorkflowService.DeprecateActivityType"
)

type DeprecateActivityTypeHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateActivityTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeprecateActivityTypeRequest struct {
	Headers DeprecateActivityTypeHeaders
	Request shared.DeprecateActivityTypeInput `request:"mediaType=application/json"`
}

type DeprecateActivityTypeResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	TypeDeprecatedFault        *interface{}
	UnknownResourceFault       *interface{}
}
