package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSessionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeSessionsXAmzTargetEnum string

const (
	DescribeSessionsXAmzTargetEnumAmazonSsmDescribeSessions DescribeSessionsXAmzTargetEnum = "AmazonSSM.DescribeSessions"
)

type DescribeSessionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSessionsRequest struct {
	QueryParams DescribeSessionsQueryParams
	Headers     DescribeSessionsHeaders
	Request     shared.DescribeSessionsRequest `request:"mediaType=application/json"`
}

type DescribeSessionsResponse struct {
	ContentType              string
	DescribeSessionsResponse *shared.DescribeSessionsResponse
	InternalServerError      *interface{}
	InvalidFilterKey         *interface{}
	InvalidNextToken         *interface{}
	StatusCode               int64
}
