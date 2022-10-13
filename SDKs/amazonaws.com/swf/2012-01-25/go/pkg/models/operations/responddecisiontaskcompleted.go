package operations

import (
	"openapi/pkg/models/shared"
)

type RespondDecisionTaskCompletedXAmzTargetEnum string

const (
	RespondDecisionTaskCompletedXAmzTargetEnumSimpleWorkflowServiceRespondDecisionTaskCompleted RespondDecisionTaskCompletedXAmzTargetEnum = "SimpleWorkflowService.RespondDecisionTaskCompleted"
)

type RespondDecisionTaskCompletedHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondDecisionTaskCompletedXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RespondDecisionTaskCompletedRequest struct {
	Headers RespondDecisionTaskCompletedHeaders
	Request shared.RespondDecisionTaskCompletedInput `request:"mediaType=application/json"`
}

type RespondDecisionTaskCompletedResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
