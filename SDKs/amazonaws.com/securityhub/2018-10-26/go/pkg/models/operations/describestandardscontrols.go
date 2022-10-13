package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStandardsControlsPathParams struct {
	StandardsSubscriptionArn string `pathParam:"style=simple,explode=false,name=StandardsSubscriptionArn"`
}

type DescribeStandardsControlsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeStandardsControlsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeStandardsControlsRequest struct {
	PathParams  DescribeStandardsControlsPathParams
	QueryParams DescribeStandardsControlsQueryParams
	Headers     DescribeStandardsControlsHeaders
}

type DescribeStandardsControlsResponse struct {
	ContentType                       string
	DescribeStandardsControlsResponse *shared.DescribeStandardsControlsResponse
	InternalException                 *interface{}
	InvalidAccessException            *interface{}
	InvalidInputException             *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
