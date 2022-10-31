package operations

import (
	"openapi/pkg/models/shared"
)

type RespondActivityTaskCanceledXAmzTargetEnum string

const (
	RespondActivityTaskCanceledXAmzTargetEnumSimpleWorkflowServiceRespondActivityTaskCanceled RespondActivityTaskCanceledXAmzTargetEnum = "SimpleWorkflowService.RespondActivityTaskCanceled"
)

type RespondActivityTaskCanceledHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondActivityTaskCanceledXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RespondActivityTaskCanceledRequest struct {
	Headers RespondActivityTaskCanceledHeaders
	Request shared.RespondActivityTaskCanceledInput `request:"mediaType=application/json"`
}

type RespondActivityTaskCanceledResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
