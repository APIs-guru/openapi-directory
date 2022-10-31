package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowExecutionHistoryQueryParams struct {
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	NextPageToken   *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type GetWorkflowExecutionHistoryXAmzTargetEnum string

const (
	GetWorkflowExecutionHistoryXAmzTargetEnumSimpleWorkflowServiceGetWorkflowExecutionHistory GetWorkflowExecutionHistoryXAmzTargetEnum = "SimpleWorkflowService.GetWorkflowExecutionHistory"
)

type GetWorkflowExecutionHistoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWorkflowExecutionHistoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetWorkflowExecutionHistoryRequest struct {
	QueryParams GetWorkflowExecutionHistoryQueryParams
	Headers     GetWorkflowExecutionHistoryHeaders
	Request     shared.GetWorkflowExecutionHistoryInput `request:"mediaType=application/json"`
}

type GetWorkflowExecutionHistoryResponse struct {
	ContentType                string
	History                    *shared.History
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
