package operations

import (
	"openapi/pkg/models/shared"
)

type ListClassificationJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListClassificationJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListClassificationJobsRequestBodyFilterCriteria struct {
	Excludes []shared.ListJobsFilterTerm `json:"excludes"`
	Includes []shared.ListJobsFilterTerm `json:"includes"`
}

type ListClassificationJobsRequestBodySortCriteria struct {
	AttributeName *shared.ListJobsSortAttributeNameEnum `json:"attributeName"`
	OrderBy       *shared.OrderByEnum                   `json:"orderBy"`
}

type ListClassificationJobsRequestBody struct {
	FilterCriteria *ListClassificationJobsRequestBodyFilterCriteria `json:"filterCriteria"`
	MaxResults     *int64                                           `json:"maxResults"`
	NextToken      *string                                          `json:"nextToken"`
	SortCriteria   *ListClassificationJobsRequestBodySortCriteria   `json:"sortCriteria"`
}

type ListClassificationJobsRequest struct {
	QueryParams ListClassificationJobsQueryParams
	Headers     ListClassificationJobsHeaders
	Request     ListClassificationJobsRequestBody `request:"mediaType=application/json"`
}

type ListClassificationJobsResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ListClassificationJobsResponse *shared.ListClassificationJobsResponse
	ResourceNotFoundException      *interface{}
	ServiceQuotaExceededException  *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
