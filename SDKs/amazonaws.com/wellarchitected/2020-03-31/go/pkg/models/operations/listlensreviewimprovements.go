package operations

import (
	"openapi/pkg/models/shared"
)

type ListLensReviewImprovementsPathParams struct {
	LensAlias  string `pathParam:"style=simple,explode=false,name=LensAlias"`
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type ListLensReviewImprovementsQueryParams struct {
	MaxResults      *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	MilestoneNumber *int64  `queryParam:"style=form,explode=true,name=MilestoneNumber"`
	NextToken       *string `queryParam:"style=form,explode=true,name=NextToken"`
	PillarID        *string `queryParam:"style=form,explode=true,name=PillarId"`
}

type ListLensReviewImprovementsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListLensReviewImprovementsRequest struct {
	PathParams  ListLensReviewImprovementsPathParams
	QueryParams ListLensReviewImprovementsQueryParams
	Headers     ListLensReviewImprovementsHeaders
}

type ListLensReviewImprovementsResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ListLensReviewImprovementsOutput *shared.ListLensReviewImprovementsOutput
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
