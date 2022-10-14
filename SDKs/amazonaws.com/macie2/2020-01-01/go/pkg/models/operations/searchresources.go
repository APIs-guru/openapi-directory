package operations

import (
	"openapi/pkg/models/shared"
)

type SearchResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchResourcesRequestBodyBucketCriteria struct {
	Excludes *shared.SearchResourcesCriteriaBlock `json:"excludes,omitempty"`
	Includes *shared.SearchResourcesCriteriaBlock `json:"includes,omitempty"`
}

type SearchResourcesRequestBodySortCriteria struct {
	AttributeName *shared.SearchResourcesSortAttributeNameEnum `json:"attributeName,omitempty"`
	OrderBy       *shared.OrderByEnum                          `json:"orderBy,omitempty"`
}

type SearchResourcesRequestBody struct {
	BucketCriteria *SearchResourcesRequestBodyBucketCriteria `json:"bucketCriteria,omitempty"`
	MaxResults     *int64                                    `json:"maxResults,omitempty"`
	NextToken      *string                                   `json:"nextToken,omitempty"`
	SortCriteria   *SearchResourcesRequestBodySortCriteria   `json:"sortCriteria,omitempty"`
}

type SearchResourcesRequest struct {
	QueryParams SearchResourcesQueryParams
	Headers     SearchResourcesHeaders
	Request     SearchResourcesRequestBody `request:"mediaType=application/json"`
}

type SearchResourcesResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	SearchResourcesResponse       *shared.SearchResourcesResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
