package operations

import (
	"openapi/pkg/models/shared"
)

type RespondActivityTaskCompletedXAmzTargetEnum string

const (
	RespondActivityTaskCompletedXAmzTargetEnumSimpleWorkflowServiceRespondActivityTaskCompleted RespondActivityTaskCompletedXAmzTargetEnum = "SimpleWorkflowService.RespondActivityTaskCompleted"
)

type RespondActivityTaskCompletedHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondActivityTaskCompletedXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
