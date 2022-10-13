package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOpsItemsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeOpsItemsXAmzTargetEnum string

const (
	DescribeOpsItemsXAmzTargetEnumAmazonSsmDescribeOpsItems DescribeOpsItemsXAmzTargetEnum = "AmazonSSM.DescribeOpsItems"
)

type DescribeOpsItemsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOpsItemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeOpsItemsRequest struct {
	QueryParams DescribeOpsItemsQueryParams
	Headers     DescribeOpsItemsHeaders
	Request     shared.DescribeOpsItemsRequest `request:"mediaType=application/json"`
}

type DescribeOpsItemsResponse struct {
	ContentType              string
	DescribeOpsItemsResponse *shared.DescribeOpsItemsResponse
	InternalServerError      *interface{}
	StatusCode               int64
}
