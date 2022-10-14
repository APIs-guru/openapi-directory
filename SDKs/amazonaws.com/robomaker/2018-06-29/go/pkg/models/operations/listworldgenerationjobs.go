package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorldGenerationJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorldGenerationJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorldGenerationJobsRequestBody struct {
	Filters    []shared.Filter `json:"filters,omitempty"`
	MaxResults *int64          `json:"maxResults,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
}

type ListWorldGenerationJobsRequest struct {
	QueryParams ListWorldGenerationJobsQueryParams
	Headers     ListWorldGenerationJobsHeaders
	Request     ListWorldGenerationJobsRequestBody `request:"mediaType=application/json"`
}

type ListWorldGenerationJobsResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidParameterException       *interface{}
	ListWorldGenerationJobsResponse *shared.ListWorldGenerationJobsResponse
	StatusCode                      int64
	ThrottlingException             *interface{}
}
