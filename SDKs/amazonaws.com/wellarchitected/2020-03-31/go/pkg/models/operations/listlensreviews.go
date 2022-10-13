package operations

import (
	"openapi/pkg/models/shared"
)

type ListLensReviewsPathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type ListLensReviewsQueryParams struct {
	MaxResults      *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	MilestoneNumber *int64  `queryParam:"style=form,explode=true,name=MilestoneNumber"`
	NextToken       *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLensReviewsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListLensReviewsRequest struct {
	PathParams  ListLensReviewsPathParams
	QueryParams ListLensReviewsQueryParams
	Headers     ListLensReviewsHeaders
}

type ListLensReviewsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListLensReviewsOutput     *shared.ListLensReviewsOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
