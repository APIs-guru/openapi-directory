package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLogStreamsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeLogStreamsXAmzTargetEnum string

const (
	DescribeLogStreamsXAmzTargetEnumLogs20140328DescribeLogStreams DescribeLogStreamsXAmzTargetEnum = "Logs_20140328.DescribeLogStreams"
)

type DescribeLogStreamsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLogStreamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLogStreamsRequest struct {
	QueryParams DescribeLogStreamsQueryParams
	Headers     DescribeLogStreamsHeaders
	Request     shared.DescribeLogStreamsRequest `request:"mediaType=application/json"`
}

type DescribeLogStreamsResponse struct {
	ContentType                 string
	DescribeLogStreamsResponse  *shared.DescribeLogStreamsResponse
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
