package operations

import (
	"openapi/pkg/models/shared"
)

type ListClosedWorkflowExecutionsQueryParams struct {
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	NextPageToken   *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type ListClosedWorkflowExecutionsXAmzTargetEnum string

const (
	ListClosedWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceListClosedWorkflowExecutions ListClosedWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.ListClosedWorkflowExecutions"
)

type ListClosedWorkflowExecutionsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListClosedWorkflowExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListClosedWorkflowExecutionsRequest struct {
	QueryParams ListClosedWorkflowExecutionsQueryParams
	Headers     ListClosedWorkflowExecutionsHeaders
	Request     shared.ListClosedWorkflowExecutionsInput `request:"mediaType=application/json"`
}

type ListClosedWorkflowExecutionsResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowExecutionInfos     *shared.WorkflowExecutionInfos
}
