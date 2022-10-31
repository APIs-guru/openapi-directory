package operations

import (
	"openapi/pkg/models/shared"
)

type ListAnswersPathParams struct {
	LensAlias  string `pathParam:"style=simple,explode=false,name=LensAlias"`
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type ListAnswersQueryParams struct {
	MaxResults      *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	MilestoneNumber *int64  `queryParam:"style=form,explode=true,name=MilestoneNumber"`
	NextToken       *string `queryParam:"style=form,explode=true,name=NextToken"`
	PillarID        *string `queryParam:"style=form,explode=true,name=PillarId"`
}

type ListAnswersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAnswersRequest struct {
	PathParams  ListAnswersPathParams
	QueryParams ListAnswersQueryParams
	Headers     ListAnswersHeaders
}

type ListAnswersResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListAnswersOutput         *shared.ListAnswersOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
