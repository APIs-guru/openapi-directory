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
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLogStreamsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
