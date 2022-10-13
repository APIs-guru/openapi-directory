package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBucketsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeBucketsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeBucketsRequestBodySortCriteria struct {
	AttributeName *string             `json:"attributeName"`
	OrderBy       *shared.OrderByEnum `json:"orderBy"`
}

type DescribeBucketsRequestBody struct {
	Criteria     map[string]shared.BucketCriteriaAdditionalProperties `json:"criteria"`
	MaxResults   *int64                                               `json:"maxResults"`
	NextToken    *string                                              `json:"nextToken"`
	SortCriteria *DescribeBucketsRequestBodySortCriteria              `json:"sortCriteria"`
}

type DescribeBucketsRequest struct {
	QueryParams DescribeBucketsQueryParams
	Headers     DescribeBucketsHeaders
	Request     DescribeBucketsRequestBody `request:"mediaType=application/json"`
}

type DescribeBucketsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	DescribeBucketsResponse       *shared.DescribeBucketsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
