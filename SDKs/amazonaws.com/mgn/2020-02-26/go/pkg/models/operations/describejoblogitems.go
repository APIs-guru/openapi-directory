package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobLogItemsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeJobLogItemsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeJobLogItemsRequestBody struct {
	JobID      string  `json:"jobID"`
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type DescribeJobLogItemsRequest struct {
	QueryParams DescribeJobLogItemsQueryParams
	Headers     DescribeJobLogItemsHeaders
	Request     DescribeJobLogItemsRequestBody `request:"mediaType=application/json"`
}

type DescribeJobLogItemsResponse struct {
	ContentType                   string
	DescribeJobLogItemsResponse   *shared.DescribeJobLogItemsResponse
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
