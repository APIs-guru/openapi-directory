package operations

import (
	"openapi/pkg/models/shared"
)

type ListFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFindingsRequestBodyFindingCriteria struct {
	Criterion map[string]shared.CriterionAdditionalProperties `json:"criterion"`
}

type ListFindingsRequestBodySortCriteria struct {
	AttributeName *string             `json:"attributeName"`
	OrderBy       *shared.OrderByEnum `json:"orderBy"`
}

type ListFindingsRequestBody struct {
	FindingCriteria *ListFindingsRequestBodyFindingCriteria `json:"findingCriteria"`
	MaxResults      *int64                                  `json:"maxResults"`
	NextToken       *string                                 `json:"nextToken"`
	SortCriteria    *ListFindingsRequestBodySortCriteria    `json:"sortCriteria"`
}

type ListFindingsRequest struct {
	QueryParams ListFindingsQueryParams
	Headers     ListFindingsHeaders
	Request     ListFindingsRequestBody `request:"mediaType=application/json"`
}

type ListFindingsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ListFindingsResponse          *shared.ListFindingsResponse
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
