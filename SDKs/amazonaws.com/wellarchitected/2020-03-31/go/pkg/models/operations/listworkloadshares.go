package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkloadSharesPathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type ListWorkloadSharesQueryParams struct {
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken        *string `queryParam:"style=form,explode=true,name=NextToken"`
	SharedWithPrefix *string `queryParam:"style=form,explode=true,name=SharedWithPrefix"`
}

type ListWorkloadSharesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorkloadSharesRequest struct {
	PathParams  ListWorkloadSharesPathParams
	QueryParams ListWorkloadSharesQueryParams
	Headers     ListWorkloadSharesHeaders
}

type ListWorkloadSharesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListWorkloadSharesOutput  *shared.ListWorkloadSharesOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
