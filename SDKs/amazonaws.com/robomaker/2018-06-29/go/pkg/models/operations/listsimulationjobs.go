package operations

import (
	"openapi/pkg/models/shared"
)

type ListSimulationJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSimulationJobsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListSimulationJobsRequestBody struct {
	Filters    []shared.Filter `json:"filters,omitempty"`
	MaxResults *int64          `json:"maxResults,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
}

type ListSimulationJobsRequest struct {
	QueryParams ListSimulationJobsQueryParams
	Headers     ListSimulationJobsHeaders
	Request     ListSimulationJobsRequestBody `request:"mediaType=application/json"`
}

type ListSimulationJobsResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	InvalidParameterException  *interface{}
	ListSimulationJobsResponse *shared.ListSimulationJobsResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
}
