package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDeploymentJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDeploymentJobsRequestBody struct {
	Filters    []shared.Filter `json:"filters,omitempty"`
	MaxResults *int64          `json:"maxResults,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
}

type ListDeploymentJobsRequest struct {
	QueryParams ListDeploymentJobsQueryParams
	Headers     ListDeploymentJobsHeaders
	Request     ListDeploymentJobsRequestBody `request:"mediaType=application/json"`
}

type ListDeploymentJobsResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	InvalidParameterException  *interface{}
	ListDeploymentJobsResponse *shared.ListDeploymentJobsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
}
