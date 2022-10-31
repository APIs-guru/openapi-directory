package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeQueriesXAmzTargetEnum string

const (
	DescribeQueriesXAmzTargetEnumLogs20140328DescribeQueries DescribeQueriesXAmzTargetEnum = "Logs_20140328.DescribeQueries"
)

type DescribeQueriesHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeQueriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeQueriesRequest struct {
	Headers DescribeQueriesHeaders
	Request shared.DescribeQueriesRequest `request:"mediaType=application/json"`
}

type DescribeQueriesResponse struct {
	ContentType                 string
	DescribeQueriesResponse     *shared.DescribeQueriesResponse
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
