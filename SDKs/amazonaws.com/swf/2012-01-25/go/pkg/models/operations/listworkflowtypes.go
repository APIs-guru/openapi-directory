package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkflowTypesQueryParams struct {
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	NextPageToken   *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type ListWorkflowTypesXAmzTargetEnum string

const (
	ListWorkflowTypesXAmzTargetEnumSimpleWorkflowServiceListWorkflowTypes ListWorkflowTypesXAmzTargetEnum = "SimpleWorkflowService.ListWorkflowTypes"
)

type ListWorkflowTypesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWorkflowTypesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListWorkflowTypesRequest struct {
	QueryParams ListWorkflowTypesQueryParams
	Headers     ListWorkflowTypesHeaders
	Request     shared.ListWorkflowTypesInput `request:"mediaType=application/json"`
}

type ListWorkflowTypesResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowTypeInfos          *shared.WorkflowTypeInfos
}
