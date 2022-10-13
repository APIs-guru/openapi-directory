package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRuntimeVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeRuntimeVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRuntimeVersionsRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type DescribeRuntimeVersionsRequest struct {
	QueryParams DescribeRuntimeVersionsQueryParams
	Headers     DescribeRuntimeVersionsHeaders
	Request     DescribeRuntimeVersionsRequestBody `request:"mediaType=application/json"`
}

type DescribeRuntimeVersionsResponse struct {
	ContentType                     string
	DescribeRuntimeVersionsResponse *shared.DescribeRuntimeVersionsResponse
	InternalServerException         *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
