package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
	ProductArn *string `queryParam:"style=form,explode=true,name=ProductArn"`
}

type DescribeProductsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeProductsRequest struct {
	QueryParams DescribeProductsQueryParams
	Headers     DescribeProductsHeaders
}

type DescribeProductsResponse struct {
	ContentType              string
	DescribeProductsResponse *shared.DescribeProductsResponse
	InternalException        *interface{}
	InvalidAccessException   *interface{}
	InvalidInputException    *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
}
