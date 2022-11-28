package operations

import (
	"openapi/pkg/models/shared"
)

type SearchResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// SearchResourcesRequestBodyBucketCriteria
// Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
type SearchResourcesRequestBodyBucketCriteria struct {
	Excludes *shared.SearchResourcesCriteriaBlock `json:"excludes,omitempty"`
	Includes *shared.SearchResourcesCriteriaBlock `json:"includes,omitempty"`
}

// SearchResourcesRequestBodySortCriteria
// Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
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
