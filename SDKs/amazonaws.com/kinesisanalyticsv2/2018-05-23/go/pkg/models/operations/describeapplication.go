package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicationXAmzTargetEnum string

const (
	DescribeApplicationXAmzTargetEnumKinesisAnalytics20180523DescribeApplication DescribeApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.DescribeApplication"
)

type DescribeApplicationHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeApplicationRequest struct {
	Headers DescribeApplicationHeaders
	Request shared.DescribeApplicationRequest `request:"mediaType=application/json"`
}

type DescribeApplicationResponse struct {
	ContentType                 string
	DescribeApplicationResponse *shared.DescribeApplicationResponse
	InvalidArgumentException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
