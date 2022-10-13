package operations

import (
	"openapi/pkg/models/shared"
)

type RespondActivityTaskCompletedXAmzTargetEnum string

const (
	RespondActivityTaskCompletedXAmzTargetEnumSimpleWorkflowServiceRespondActivityTaskCompleted RespondActivityTaskCompletedXAmzTargetEnum = "SimpleWorkflowService.RespondActivityTaskCompleted"
)

type RespondActivityTaskCompletedHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondActivityTaskCompletedXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RespondActivityTaskCompletedRequest struct {
	Headers RespondActivityTaskCompletedHeaders
	Request shared.RespondActivityTaskCompletedInput `request:"mediaType=application/json"`
}

type RespondActivityTaskCompletedResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
