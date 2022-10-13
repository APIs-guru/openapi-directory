package operations

import (
	"openapi/pkg/models/shared"
)

type RespondActivityTaskFailedXAmzTargetEnum string

const (
	RespondActivityTaskFailedXAmzTargetEnumSimpleWorkflowServiceRespondActivityTaskFailed RespondActivityTaskFailedXAmzTargetEnum = "SimpleWorkflowService.RespondActivityTaskFailed"
)

type RespondActivityTaskFailedHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondActivityTaskFailedXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RespondActivityTaskFailedRequest struct {
	Headers RespondActivityTaskFailedHeaders
	Request shared.RespondActivityTaskFailedInput `request:"mediaType=application/json"`
}

type RespondActivityTaskFailedResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
