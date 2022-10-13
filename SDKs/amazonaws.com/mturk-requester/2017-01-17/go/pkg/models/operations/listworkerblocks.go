package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkerBlocksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListWorkerBlocksXAmzTargetEnum string

const (
	ListWorkerBlocksXAmzTargetEnumMTurkRequesterServiceV20170117ListWorkerBlocks ListWorkerBlocksXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListWorkerBlocks"
)

type ListWorkerBlocksHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWorkerBlocksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListWorkerBlocksRequest struct {
	QueryParams ListWorkerBlocksQueryParams
	Headers     ListWorkerBlocksHeaders
	Request     shared.ListWorkerBlocksRequest `request:"mediaType=application/json"`
}

type ListWorkerBlocksResponse struct {
	ContentType              string
	ListWorkerBlocksResponse *shared.ListWorkerBlocksResponse
	RequestError             *interface{}
	ServiceFault             *interface{}
	StatusCode               int64
}
