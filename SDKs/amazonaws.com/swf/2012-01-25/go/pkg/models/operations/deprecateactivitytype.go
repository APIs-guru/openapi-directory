package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateActivityTypeXAmzTargetEnum string

const (
	DeprecateActivityTypeXAmzTargetEnumSimpleWorkflowServiceDeprecateActivityType DeprecateActivityTypeXAmzTargetEnum = "SimpleWorkflowService.DeprecateActivityType"
)

type DeprecateActivityTypeHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateActivityTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
