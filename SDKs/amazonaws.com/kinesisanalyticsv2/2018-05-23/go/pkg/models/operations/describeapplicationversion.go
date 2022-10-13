package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicationVersionXAmzTargetEnum string

const (
	DescribeApplicationVersionXAmzTargetEnumKinesisAnalytics20180523DescribeApplicationVersion DescribeApplicationVersionXAmzTargetEnum = "KinesisAnalytics_20180523.DescribeApplicationVersion"
)

type DescribeApplicationVersionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeApplicationVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeApplicationVersionRequest struct {
	Headers DescribeApplicationVersionHeaders
	Request shared.DescribeApplicationVersionRequest `request:"mediaType=application/json"`
}

type DescribeApplicationVersionResponse struct {
	ContentType                        string
	DescribeApplicationVersionResponse *shared.DescribeApplicationVersionResponse
	InvalidArgumentException           *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	UnsupportedOperationException      *interface{}
}
